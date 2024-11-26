import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage {
  email: string = 'testkunde@paj-gps.de';
  password: string = 'app123#';
  loginError: string | null = null;
  isLoading: boolean = false;

  constructor(private apiService: ApiService, private router: Router) {}

  onLogin() {
    this.apiService.login(this.email, this.password).subscribe({
      next: (response: any) => {
        const token = response.success.token;  // Corrected line
        if (token) {
          localStorage.setItem('token', token);
          this.router.navigate(['/menu']);
        } else {
          console.error('Login response does not contain a token.');
          this.loginError = 'Login failed. Please try again.';
        }
      },
      error: (error) => {
        console.error('Login error:', error);
        this.loginError = 'Login failed. Please check your credentials.';
      }
    });
  }
  
  
}
