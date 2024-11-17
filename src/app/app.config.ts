import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { HttpClientModule } from '@angular/common/http';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthComponent } from './auth/auth.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SettingsComponent } from './settings/settings.component';
import { UsersComponent } from './users/users.component';
import { FuelComparisonComponent } from './fuel-comparison/fuel-comparison.component';
import { EditMotorcycleComponent } from './edit-motorcycle/edit-motorcycle.component'; // Importa y declara EditMotorcycleComponent
import { appRoutes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AuthComponent,
    SidebarComponent,
    SettingsComponent,
    UsersComponent,
    FuelComparisonComponent,
    EditMotorcycleComponent // Asegúrate de declarar EditMotorcycleComponent
  ],
  imports: [
    BrowserModule,
    CommonModule, // Asegúrate de importar CommonModule
    FormsModule, // Asegúrate de importar FormsModule
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    NgxChartsModule,
    BrowserAnimationsModule, // Importa BrowserAnimationsModule
    MatDialogModule, // Importa MatDialogModule
    MatButtonModule, // Importa MatButtonModule
    MatFormFieldModule, // Importa MatFormFieldModule
    MatInputModule // Importa MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppConfig { }
