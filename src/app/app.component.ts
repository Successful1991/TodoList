import {Component, OnInit} from '@angular/core';
import {PopupService} from "./popup/popup.service";
import {AppService} from "./app.service";

@Component ({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  page = 1;
  limit:number = 5;
  listItem = [];
  dellete:boolean = false;

  constructor(public popupService:PopupService,
              private appService:AppService
  ) {}

  ngOnInit() {
    this.listItem = this.appService.getData( this.page , this.limit);
  }
  getListItem(){
    this.page = 1;
    this.listItem = this.appService.getListItem(this.page, this.limit);
  }
  nextData(){
    this.page +=1;
    console.log('nextData',typeof (this.page) , typeof (this.limit));
    this.listItem = this.appService.nextData(this.page , this.limit);
  }
  prevData(){
    this.page -=1;
    this.listItem = this.appService.prevData(this.page , this.limit);
  }
  firstPage() {
    return this.appService.firstPage(this.page);
  }
  lastPage() {
    return this.appService.lastPage(this.page , this.limit);
  }

  del(){}
}



