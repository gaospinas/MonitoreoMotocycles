import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '../services/auth.service';
import { MotorcycleService } from '../services/motorcycle.service';
import { Motorcycle } from '../models/motorcycle.model';
import { User } from '../models/user.model';
import { EditMotorcycleComponent } from '../edit-motorcycle/edit-motorcycle.component';

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
    private motorcycleService: MotorcycleService,
    private dialog: MatDialog
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
    const dialogRef = this.dialog.open(EditMotorcycleComponent, {
      width: '600px',
      data: { motorcycle }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadMotorcycles(this.user!.id);
      }
    });
  }

  deleteMotorcycle(id: number): void {
    this.motorcycleService.deleteMotorcycle(id).subscribe(() => {
      this.motorcycles = this.motorcycles?.filter(m => m.id !== id);
      console.log('Motocicleta eliminada:', id);
    });
  }

  onSidebarCollapse(collapsed: boolean): void {
    this.isSidebarCollapsed = collapsed;
  }
}
