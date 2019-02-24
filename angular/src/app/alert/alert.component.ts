import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  isOpen = false;
  title:string = '';
  description:string = '';
  
  constructor() { }

  ngOnInit() {
  }

  @Input('isOpen')
  set dataOpen(isOpen: boolean) {
    this.isOpen = isOpen;
  }

  @Input('title')
  set dataTitle(title: string) {
    title = title;
  }

  @Input('description')
  set dataDescription(description: string) {
    this.description = description;
  }

  alertClose() {
    this.isOpen = false;
  }
  
}
