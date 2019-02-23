import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class UtilityService {
  private loggedIn = new BehaviorSubject<boolean>(this.isLoggedCheck());

  constructor() { }

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  public isLoggedCheck() {
     return localStorage.getItem('token') ? true : false;
  }

  public getUserName() {
       return localStorage.getItem('user');
  }

  public getToken() {
    return localStorage.getItem('token');
}

  public setLoggedUser(username, token) {
    localStorage.setItem('user', username);
    localStorage.setItem('token', token);

    if(localStorage.setItem('user', username) &&  localStorage.setItem('token', token)) {
      this.loggedIn.next(true);
    }
  }

  public logOutUser() {
    localStorage.clear();
  }

}
