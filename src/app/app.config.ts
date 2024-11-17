import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthComponent } from './auth/auth.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SettingsComponent } from './settings/settings.component';
import { UsersComponent } from './users/users.component';
import { FuelComparisonComponent } from './fuel-comparison/fuel-comparison.component'; // Importar FuelComparisonComponent
import { appRoutes } from './app.routes';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AuthComponent,
    SidebarComponent,
    SettingsComponent,
    UsersComponent,
    FuelComparisonComponent // Declarar FuelComparisonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    NgxChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppConfig { }
