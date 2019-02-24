import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  title: string= '';
  description: string= '';

  constructor() { }

  ngOnInit() {
  }

  @Input('title')
  set dataTitle(title: string) {
    this.title = title;
  }

  @Input('description')
  set dataDescription(description: string) {
    this.description = description;
  }

}
