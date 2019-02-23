import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UtilityService } from '../utility.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() joinEvent = new EventEmitter<boolean>();
  isLogged: boolean = false;
  userName: string = '';

  constructor(private utilityService: UtilityService) { }

  ngOnInit() {
    this.isLogged = this.utilityService.isLoggedCheck();
    this.userName = (this.isLogged) ? this.utilityService.getUserName() : '';
  }

  openLoginModal() {
    this.joinEvent.emit(true);
  }

  /**handle logging in of user from login component */
  isLoggedIn() {
    this.isLogged = true;
  }

  /** handle set username from login component */
  setHeaderName(name) {
    this.userName = name;
  }

}
