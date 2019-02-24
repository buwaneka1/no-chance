import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CONSTANTS } from '../../constants';

@Component({
  selector: 'app-rant-list',
  templateUrl: './rant-list.component.html',
  styleUrls: ['./rant-list.component.css']
})
export class RantListComponent implements OnInit {
  isLoading: boolean = false;
  rantList: Array<any> = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getRantList();
  }

  getRantList() {
    this.isLoading = true;
    this.apiService.call('get', {
      url: CONSTANTS.rantList,
      data: {}
    }).then((res) => {
      this.rantList = res['posts'];
      this.isLoading = false;
    }).catch(err=>{
      this.isLoading = false;
    })
  }

  receiveVoteClick($event) {
    this.getRantList();
  }

}
