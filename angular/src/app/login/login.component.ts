import { Component, OnInit, Input } from '@angular/core';
import {NgForm} from '@angular/forms'
import { ApiService } from '../api.service';
import { User } from 'models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  private isOpen = false;
  private isLoadingTrue = false;
  usernameText: string;
  passwordText: string;
  usernameEmpty: boolean;
  passwordEmpty: boolean;

  constructor(private apiService: ApiService) { 
    this.usernameEmpty = false;
    this.passwordEmpty = false;
  }

  ngOnInit() {
    this.usernameText = '';
    this.passwordText = '';
  }

  reset() {
    this.usernameText = '';
    this.passwordText = '';
    this.usernameEmpty = false;
    this.passwordEmpty = false;
  }


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
        this.apiService.activateUser(userDetails).subscribe((res) => {
          if (res['ok']) {
           
          } else{

          }
          this.isLoadingTrue = false;
        })
    }
  }

  validateInputs(f: NgForm, type) {
      this.validateResults(f, type);
  }

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

}
