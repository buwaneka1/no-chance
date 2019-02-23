import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {NgForm} from '@angular/forms'
import { Observable } from 'rxjs/Observable';

import { ApiService } from '../api.service';
import { UtilityService } from '../utility.service';

import { User } from 'models/user';
import { CONSTANTS } from '../../constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  private isOpen = false;
  private isLoadingTrue = false;
  private errorMessage = null;
  usernameText: string;
  passwordText: string;
  usernameEmpty: boolean;
  passwordEmpty: boolean;
  @Output() loggedIn = new EventEmitter<boolean>();
  @Output() usernameEvent = new EventEmitter<boolean>();

  constructor(private apiService: ApiService, private utilityService: UtilityService) { 
    this.usernameEmpty = false;
    this.passwordEmpty = false;
  }

  ngOnInit() {
    this.usernameText = '';
    this.passwordText = '';
  }

  /** to handle when Join button is clicked on header */
  isOpenChanged() {
    this.isOpen = true;
    this.reset();
  }


  onSubmit(f: NgForm) {
    this.validateResults(f, 0);
    if(!this.usernameEmpty && !this.passwordEmpty) {
       this.isLoadingTrue = true;
        var userDetails = {
          username: f.value.username,
          password: f.value.password
        }
        this.reset();
        this.apiService.call('post', {
          url: CONSTANTS.userActivate,
          data: {
            username: f.value.username,
            password: f.value.password
          }
        }).then((res) => {
          this.loggedIn.emit(true);
          this.usernameEvent.emit(res['username']);
          this.utilityService.setLoggedUser(res['username'], res['token']);
          this.isOpen = false;
          this.reset();
        }).catch(err=>{
          this.errorMessage = err;
          this.isLoadingTrue = false;
        })
    }
  }

  /**validate for on blur events */
  validateInputs(f: NgForm, type) {
    this.validateResults(f, type);
  }

  /**common function to validate******/
  validateResults(f, type) {
      this.usernameEmpty = false;
      this.passwordEmpty = false;
    if (!f.value.username && !f.value.password) {
      this.usernameEmpty = true;
      this.passwordEmpty = true;
    } else if (!f.value.username && type != 2) {
      this.usernameEmpty = true;
    } else if (!f.value.password && type != 1) {
      this.passwordEmpty = true;
    }
  }

  @Input('isOpen')
  set data(isOpen: boolean) {
    this.isOpen = isOpen;
  }

  /**to reset the values */
  reset() {
    this.usernameText = '';
    this.passwordText = '';
    this.errorMessage = null;
    this.usernameEmpty = false;
    this.passwordEmpty = false;
  }

}
