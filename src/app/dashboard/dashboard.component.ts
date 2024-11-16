import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { MotorcycleService } from '../services/motorcycle.service';
import { RefillService } from '../services/refill.service';
import { Motorcycle } from '../models/motorcycle.model';
import { Refill } from '../models/refill.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  motorcycles?: Motorcycle[];
  refills: Map<number, Refill[]> = new Map();

  constructor(private authService: AuthService,
              private motorcycleService: MotorcycleService,
              private refillService: RefillService) { }

  ngOnInit(): void {
    const user = localStorage.getItem('user');
    if (user) {
      const parsedUser = JSON.parse(user);
      this.loadMotorcycles(parsedUser.id);
    } else {
      // Manejar el caso en el que el usuario no esté en localStorage
      console.error('User not found in localStorage');
    }
  }

  loadMotorcycles(ownerId: number): void {
    this.motorcycleService.getMotorcyclesByOwnerId(ownerId).subscribe(motorcycles => {
      this.motorcycles = motorcycles;
      console.log('Motorcycles:', this.motorcycles); // Para verificar
      motorcycles.forEach(motorcycle => {
        this.loadRefills(motorcycle.id);
      });
    });
  }

  loadRefills(motorcycleId: number): void {
    this.refillService.getRefillsByMotorcycleId(motorcycleId).subscribe(refills => {
      this.refills.set(motorcycleId, refills);
      console.log('Refills for Motorcycle ID ' + motorcycleId + ':', refills); // Para verificar
    });
  }
}
