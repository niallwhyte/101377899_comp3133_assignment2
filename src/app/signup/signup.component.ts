import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import {hash, compare} from 'bcryptjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  firstname: string = '';
  lastname: string = '';
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  signup() {
    hash(this.password, 10, (err, hashedPassword) => {
      if (err) {
        console.error('Hashing password error occurred:', err);
      } else {
        const userData = {
          firstname: this.firstname,
          lastname: this.lastname,
          email: this.email,
          password: hashedPassword
        };
        this.authService.setSession(userData);

        // Redirect to login page after successful signup
        console.log('Signing in ?')
        this.router.navigate(['/login']);
      }
    });
  }
}