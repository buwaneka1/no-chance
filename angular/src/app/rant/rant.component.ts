import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rant',
  templateUrl: './rant.component.html',
  styleUrls: ['./rant.component.css']
})
export class RantComponent implements OnInit {
  rantValues:any = [];

  @Input('rantValues')
  set data(rantValues: boolean) {
    this.rantValues = rantValues;
  }


  constructor() { }

  ngOnInit() {

  }

}
