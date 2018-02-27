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
  limit:number =5 ;
  lastPage;

  addItem(items){
    this.messages.unshift(items);
    this.setData(this.messages);
  }
  setData(data){
    console.log('отправка на сервер' , data);
    // this.http.put('./data/data.service.ts', data );
  }
  getData(page , limit){
    this.messages = this.dataService.listDate;
    this.dataAddId();
    this.lastPage = Math.ceil(this.messages.length / this.limit);
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


  delItem(){
    let message = this.messages.filter(mes=>mes.checked!==true);
    this.messages = message;
    this.dataAddId();
    this.setData(this.messages);
    return this.getListItem( this.page , this.limit);
  }

  newStatus(){
    this.setData(this.messages);
  };
  numLastPage(){
    return this.lastPage;
  }
}
