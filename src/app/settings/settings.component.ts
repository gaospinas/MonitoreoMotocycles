// src/app/settings/settings.component.ts

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  user?: User;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.user = this.authService.getUserFromLocalStorage();
    if (!this.user) {
      console.error('User not found in localStorage');
    }
  }

  updateUser(): void {
    // Implementar la lógica de actualización aquí
  }
}
