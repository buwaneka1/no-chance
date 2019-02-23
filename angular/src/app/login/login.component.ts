import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private isOpen = false;

  constructor() { }

  ngOnInit() {
  }

  isOpenChanged() {
    this.isOpen = true;
  }

  @Input('isOpen')
  set data(isOpen: boolean) {
    this.isOpen = isOpen;
  }

}
