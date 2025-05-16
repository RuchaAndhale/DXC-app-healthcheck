import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent }, // default route to login
    { path: '', component: AppComponent }, // route to main app dashboard after login
    { path: '**', redirectTo: '' }
];
