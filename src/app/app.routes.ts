import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    { path: '', component: LoginComponent }, // default route to login
    { path: 'dashboard', component: AppComponent }, // route to main app dashboard after login
    { path: '**', redirectTo: '' }
];
