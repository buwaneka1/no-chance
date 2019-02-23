import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() joinEvent = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  openLoginModal() {
    this.joinEvent.emit(true);
  }

}
