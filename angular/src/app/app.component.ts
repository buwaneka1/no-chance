import { Component,ViewChild } from "@angular/core";
import { LoginComponent } from "./login/login.component";
import { CONSTANTS } from '../constants';
import { HeaderComponent } from "./header/header.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Eyepax JavaScript Hackathon";
  isLoadingTrue = false;
  isLogingOpen = false;

  @ViewChild('login')
  private login: LoginComponent;

  @ViewChild('header')
  private header: HeaderComponent;

  receiveJoinClick($event) {
    this.isLogingOpen = $event;
    this.login.isOpenChanged();
  }

  receiveLoggedIn($event) {
    this.header.isLoggedIn();
  }

  setUserName($event) {
    this.header.setHeaderName($event);
  }
  
}
