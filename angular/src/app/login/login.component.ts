import { Component, OnInit, Input } from '@angular/core';
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  private isOpen = false;
  private isLoadingTrue = true;
  usernameText: string;
  passwordText: string;
  usernameEmpty: boolean;
  passwordEmpty: boolean;

  constructor() { 
    this.usernameEmpty = false;
    this.passwordEmpty = false;
  }

  ngOnInit() {
    this.usernameText = '';
    this.passwordText = '';
  }

  isOpenChanged() {
    this.isOpen = true;
  }

  onSubmit(f: NgForm) {
    this.validateResults(f);
  }

  validateInputs(f: NgForm) {
      this.validateResults(f);
  }

  validateResults(f) {
    this.usernameEmpty = false;
      this.passwordEmpty = false;
    if (!f.value.username && !f.value.password) {
      this.usernameEmpty = true;
      this.passwordEmpty = true;
    } else if (!f.value.username) {
      this.usernameEmpty = true;
    } else if (!f.value.password) {
      this.passwordEmpty = true;
    }
  }

  @Input('isOpen')
  set data(isOpen: boolean) {
    this.isOpen = isOpen;
  }

}
