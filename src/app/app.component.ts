import {Component, OnInit} from '@angular/core';
import {DataComponent} from "./data/data.component";

@Component ({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor( private dataComponent:DataComponent) {}

  messages = [];
  listItem = [];

  page = 1;
  limit = 5;


  ngOnInit() {
    this.messages = this.dataComponent.listDate;
    console.log(this.messages);
    this.getListItem( this.page , this.limit);
  }

  getListItem( page , limit) {
    this.listItem = [];
    let res = (page*limit)-limit;
    for (let i = 0; i <limit ; i++ ) {
      this.listItem.push(this.messages[res++]);
    }
  }

  nextData(){
    this.page +=1;
    this.getListItem( this.page , this.limit);
  }
  prevData(){
    this.page -=1;
    this.getListItem( this.page , this.limit);
  }

  firstPage() {
    return this.page === 1 ? true : false ;
  }
  lastPage() {
    let lastPage = Math.ceil(this.messages.length/this.limit);
    return this.page === lastPage ? true : false ;
  }


}



