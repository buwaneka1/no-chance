import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CONSTANTS } from '../constants';
import { User } from '../models/user';

@Injectable()
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  public activateUser(user: User){
    return this.httpClient.post(CONSTANTS.userActivate,user)
  }

}
