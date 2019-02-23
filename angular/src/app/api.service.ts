import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CONSTANTS } from '../constants';
import { User } from '../models/user';
import { resolve } from 'url';

const errors = {
  'SERVER_ERROR': CONSTANTS.serverError,
  'INVALID_TOKEN': CONSTANTS.invalidToken,
  'INVALID_CREDENTIALS': CONSTANTS.invalidCredentials
}

@Injectable()
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  public call(method, request){
    return new Promise((resolve, reject) => {

      // if(isLogin){
      //   request.data.headers = {
      //     'X-Token': getToken()
      //   }
      // }

      this.httpClient[method](request.url,request.data).subscribe((data: any) => {
        if(data.ok === true){
          resolve(data);
        } else{
          reject(errors[data.error]);
        }
        
        err => {
          console.log('sdaasd');
          reject(errors[data.error]);
        }
      });
    });
  }

}
