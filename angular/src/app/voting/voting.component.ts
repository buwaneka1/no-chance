import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.css']
})
export class VotingComponent implements OnInit {
  upVoted:boolean = false;
  downVoted:boolean = false;
  votingCount:number = 0;

  @Input('upVoted')
  set data(upVoted: boolean) {
    this.upVoted = upVoted;
  }

  @Input('downVoted')
  set dataDown(downVoted: boolean) {
    this.downVoted = downVoted;
  }

  @Input('votingCount')
  set dataVotes(votingCount: number) {
    this.votingCount = votingCount;
  }

  constructor() { }

  ngOnInit() {
  }

}
