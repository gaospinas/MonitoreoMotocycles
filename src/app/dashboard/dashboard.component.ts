import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
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
  isSidebarCollapsed = false;

  constructor(
    private authService: AuthService,
    private motorcycleService: MotorcycleService
  ) {}

  ngOnInit(): void {
    this.user = this.authService.getUserFromLocalStorage();
    if (this.user) {
      this.loadMotorcycles(this.user.id);
    } else {
      console.error('User not found in localStorage');
    }
  }

  loadMotorcycles(ownerId: number): void {
    this.motorcycleService.getMotorcyclesByOwnerId(ownerId).subscribe((motorcycles: Motorcycle[]) => {
      this.motorcycles = motorcycles;
      console.log('Motorcycles:', this.motorcycles);
    });
  }

  editMotorcycle(motorcycle: Motorcycle): void {
    // Implementar la lógica de edición aquí
  }

  deleteMotorcycle(id: number): void {
    this.motorcycleService.deleteMotorcycle(id).subscribe(() => {
      this.motorcycles = this.motorcycles?.filter(m => m.id !== id);
    });
  }

  onSidebarCollapse(collapsed: boolean) {
    this.isSidebarCollapsed = collapsed;
  }
}
