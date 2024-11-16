import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  isLoginMode = true;
  user = {
    username: '',
    email: '',
    password: ''
  };
  motorcycle = {
    licensePlate: '',
    brand: '',
    model: '',
    fuelTypeId: null
  };

  constructor(private authService: AuthService, private router: Router) {}

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit() {
    if (this.isLoginMode) {
      this.authService.login(this.user.email, this.user.password).subscribe(() => {
        this.router.navigate(['/dashboard']);
      }, error => {
        console.error('Login failed:', error);
      });
    } else {
      this.authService.register(this.user, this.motorcycle).subscribe(() => {
        this.router.navigate(['/dashboard']);
      }, error => {
        console.error('Registration failed:', error);
      });
    }
  }
}
