import {Component, OnInit} from '@angular/core';
import {PopupService} from "./popup/popup.service";
import {AppService} from "./app.service";

@Component ({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  page:number = 1;
  limit:number = 5;
  listItem = [];
  delItem:boolean = false;

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
  nextPage(){
    this.page +=1;
    this.listItem = this.appService.nextPage(this.page);
  }

  prevPage(){
    this.page -=1;
    this.listItem = this.appService.prevPage(this.page);
  }

  firstPage() {
    return this.appService.firstPage();
  }
  lastPage() {
    return this.appService.lastPage();
  }

  del(){
    this.listItem = this.appService.delItem();
  }
  newStatus(){
    this.appService.newStatus();
  };
}



