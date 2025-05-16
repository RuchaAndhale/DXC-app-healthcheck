import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  isLoginPage = true;
  isForgotPasswordPage = false;
  username = '';
  password = '';
  registerUsername = '';
  registerPassword = '';
  registerEmail = '';
  email = '';

  constructor(private router: Router) {}


  togglePage() {
    this.isLoginPage = !this.isLoginPage;
  }

  toggleForgotPassword() {
    this.isForgotPasswordPage = !this.isForgotPasswordPage;
    this.isLoginPage = !this.isForgotPasswordPage;
  }

  login() {
    // Add logic to handle user login
    console.log('Logging in:', this.username, this.password);
    this.router.navigate(['/dashboard']);
  }

  register() {
    // Add logic to handle user registration
    console.log('Registering user:', this.registerUsername, this.registerEmail);
  }

  resetPassword() {
    // Add logic to handle password reset
    console.log('Resetting password for:', this.email);
  }
}
