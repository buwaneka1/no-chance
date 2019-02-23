import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rant',
  templateUrl: './rant.component.html',
  styleUrls: ['./rant.component.css']
})
export class RantComponent implements OnInit {
  rantValues:any = [];
  upVoted:boolean = false;
  downVoted:boolean = false;

  @Input('rantValues')
  set data(rantValues: boolean) {
    this.rantValues = rantValues;
    if(this.rantValues['myVote'] == 1) {
      this.upVoted['myVote'] = true;
    } else if (this.rantValues['myVote'] == -1){
      this.downVoted['myVote'] = true;
    }
  }


  constructor() { }

  ngOnInit() {

  }

}
