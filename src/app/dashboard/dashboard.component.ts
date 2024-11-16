import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { MotorcycleService } from '../services/motorcycle.service';
import { Motorcycle } from '../models/motorcycle.model';
import { User } from '../models/user.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user?: User;
  motorcycles?: Motorcycle[];

  constructor(
    private authService: AuthService,
    private motorcycleService: MotorcycleService
  ) {}

  ngOnInit(): void {
    this.user = this.authService.getUserFromLocalStorage();
    console.log('Logged in user:', this.user); // Verifica que el usuario está cargado
    if (this.user) {
      this.loadMotorcycles(this.user.id);
    } else {
      console.error('User not found in localStorage');
    }
  }

  loadMotorcycles(ownerId: number): void {
    this.motorcycleService.getMotorcyclesByOwnerId(ownerId).subscribe(motorcycles => {
      this.motorcycles = motorcycles;
      console.log('Loaded motorcycles:', this.motorcycles); // Verifica que las motocicletas están cargadas
    }, error => {
      console.error('Error loading motorcycles:', error);
    });
  }
}
