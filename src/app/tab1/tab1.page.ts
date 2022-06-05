/* eslint-disable @typescript-eslint/dot-notation */
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  datastore: Array<object> = [];

  constructor() {

    for (let index = 0; index < 10; index++) {
      this.datastore.push({idx:index});
    }

  }

  pressButton(evt,ngmodelvar){
    this.datastore.forEach((v)=>{
      v['idx'] =  v['idx'] + 1;
    });
  }

  formatter(val){
    return val+1;
  }

  changeFct(val){
    return parseInt(val, 10);
  }

}
