import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UtilityService } from '../utility.service';
import { ApiService } from '../api.service';
import { CONSTANTS } from '../../constants';

@Component({
  selector: 'app-rant',
  templateUrl: './rant.component.html',
  styleUrls: ['./rant.component.css']
})
export class RantComponent implements OnInit {
  rantValues:any = [];
  upVoted:boolean = false;
  downVoted:boolean = false;
  isLogged:boolean = false;
  @Output() voteEvent = new EventEmitter<boolean>();

  @Input('rantValues')
  set data(rantValues: any) {
    this.rantValues = rantValues;
    console.log(rantValues);
    if(this.rantValues['myVote'] == 1) {
      console.log(rantValues);
      this.upVoted = true;
    } else if (this.rantValues['myVote'] == -1){
      this.downVoted = true;
    }
  }


  constructor(private utilityService: UtilityService, private apiService: ApiService) {}

  ngOnInit() {
    this.isLogged = this.utilityService.isLoggedCheck();
  }

  /** to vote for the post */
  voteForPost(value) {
    let reqBody = {};
    let direction = "reset";
    if(value == -1 && !this.downVoted) {
      direction = "down"
    } else if(value == 1 && !this.upVoted) {
      direction = "up"
    }

      reqBody = {
        "postId": this.rantValues['id'],
        "direction": direction
      };

    if (this.isLogged) {
      this.apiService.call('post', {
        url: CONSTANTS.postVote,
        data: reqBody
      }).then((res) => {
        if(value == 1) {
          this.upVoted = true;
          this.voteEvent.emit(true);
        } else {
          this.downVoted = true;
        }
      }).catch(err=>{

      })
    }

  }

}
