import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-new-rant',
  templateUrl: './new-rant.component.html',
  styleUrls: ['./new-rant.component.css']
})
export class NewRantComponent implements OnInit {
  isOpen = false;
  
  constructor() { }

  @Input('isOpen')
  set dataOpen(isOpen: boolean) {
    this.isOpen = isOpen;
  }

  ngOnInit() {
  }

}
