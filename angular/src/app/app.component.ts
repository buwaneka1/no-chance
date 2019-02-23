import { Component,ViewChild } from "@angular/core";
import { LoginComponent } from "./login/login.component";
import { constants } from '../constants';

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

  receiveJoinClick($event) {
    this.isLogingOpen = $event;
    this.login.isOpenChanged();
  }
  
}
