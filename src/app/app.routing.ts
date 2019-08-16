import { ModuleWithProviders } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { DancingComponent } from './components/dancing/dancing.component';
import { DancersComponent } from './components/dancers/dancers.component';
import { Routes, RouterModule } from '@angular/router';



const appRoutes: Routes = [

  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent},
  { path: 'appointment', component: AppointmentComponent},
  { path: 'dancing', component: DancingComponent},
  { path: 'dancers', component: DancersComponent},
  { path: '**', redirectTo: '/login', pathMatch: 'full'},

];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
