import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private isUserLoggedIn;

  constructor() {
    this.isUserLoggedIn = false;
  }

  setUserLoggedIn(id: number, email: string, name: string, access_token: string) {
    this.isUserLoggedIn = true;
    localStorage.setItem('currentUser', JSON.stringify([id, email, name, access_token]));

  }

  getUserLoggedIn() {
    return JSON.parse(localStorage.getItem('currentUser'));
  }

  isLoggedIn() {
    if (localStorage.getItem('currentUser')) {
      return true;
    }
    return false;
  }

  logout() {
    localStorage.removeItem('currentUser');
  }

}
