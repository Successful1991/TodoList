import { Injectable } from '@angular/core';
import { DataService } from "./data/data.service";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class AppService {


  constructor(private dataService:DataService,
              private http:HttpClient) {}

  messages = [];
  listItem = [];
  page;
  limit:number;

  addItem(items){
    this.messages.unshift(items);
  }
  setData(data){
    this.http.post('./data/data.service.ts', data );
  }

  getData(page , limit) {
    this.messages = this.dataService.listDate;
    this.messages.forEach( (item, i ) => item.id = i);
    return this.getListItem( page , limit);
  }

  getListItem( page , limit) {
    let start = (page*limit)-limit;
    let end = +limit + start;
    this.listItem  = this.messages.slice(start, end);
    return this.listItem;
  }

  nextData(page , limit){
    return this.getListItem( page , limit);
  }
  prevData(page , limit){
    return this.getListItem( page , limit);
  }

  firstPage(page ) {
    return page === 1 ? true : false ;
  }
  lastPage(page , limit) {
    let lastPage = Math.ceil(this.messages.length/limit);
    return page === lastPage ? true : false ;
  }
}
