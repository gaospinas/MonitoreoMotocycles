import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Output() collapseEvent = new EventEmitter<boolean>();
  isCollapsed = false;

  constructor(private authService: AuthService, private router: Router) {}

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
    this.collapseEvent.emit(this.isCollapsed);
  }

  logout() {
    if (confirm('¿Estás seguro de que deseas cerrar sesión?')) {
      this.authService.logout();
      this.router.navigate(['/auth']);
    }
  }
}
