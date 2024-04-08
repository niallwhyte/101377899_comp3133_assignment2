import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  // Set session in local storage
  setSession(userData: any): void {
    localStorage.setItem('userData', JSON.stringify(userData));
    console.log('User data stored in local storage:', userData);
  }

  // Get user data from session based on email
  getUserByEmail(email: string): any {
    const userData = this.getSession();
    if (userData && userData.email === email) {
      return userData;
    }
    return null;
  }

  // Check if session exists
  isLoggedIn(): boolean {
    return this.getSession() !== null;
  }

  // Clear session from local storage
  logout(): void {
    localStorage.removeItem('userData');
  }

  // Get session from local storage
  private getSession(): any {
    const userData = localStorage.getItem('userData');
    return userData ? JSON.parse(userData) : null;
  }
}
