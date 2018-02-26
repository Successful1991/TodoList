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
    this.setData(this.messages);
  }
  setData(data){
    this.http.put('./data/data.service.ts', data );
  }
  getData(page , limit){
    this.messages = this.dataService.listDate;
    this.dataAddId();
    return this.getListItem(page, limit);
  };
  dataAddId() {
    this.messages.forEach( (item, i ) => {
      item.id = i;
      item.checked = false;
    });
  }

  getListItem( page , limit) {
    this.page = +page;
    this.limit = +limit;

    let start = (page*limit)-limit;
    let end = +limit + start;

    this.listItem  = this.messages.slice(start, end);
    return this.listItem;
  }

  nextPage(page){
    return this.getListItem( page , this.limit);
  }

  prevPage(page){
    return this.getListItem( page, this.limit);
  }

  firstPage() {
    return this.page === 1 ? true : false;
  }

  lastPage() {
    let lastPage = Math.ceil(this.messages.length/this.limit);
    return this.page === lastPage ? true : false ;
  }

  delItem(){
    this.messages.forEach( message => {
      if(message.checked){
        this.messages.splice(message.id,1);
      }
    });
    this.dataAddId();
    this.setData(this.messages);
    return this.getListItem( this.page , this.limit);
  }
  newStatus(){
    this.setData(this.messages);
  };
}
