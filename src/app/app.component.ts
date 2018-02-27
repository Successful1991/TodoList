import {Component, OnInit} from '@angular/core';
import {PopupService} from "./popup/popup.service";
import {AppService} from "./app.service";

@Component ({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  page:number = 1;
  limit:number = 5;
  listItem = [];
  delItem:boolean = false;
  lastPage:number ;

  constructor(public popupService:PopupService,
              private appService:AppService
  ) {}

  ngOnInit() {
    this.listItem = this.appService.getData( this.page , this.limit);
    this.numLastPage();
  }
  getListItem(){
    this.page = 1;
    this.listItem = this.appService.getListItem(this.page, this.limit);

  }
  nextPage(){
    this.page +=1;
    this.listItem = this.appService.nextPage(this.page);
    this.numLastPage();
  }

  prevPage(){
    this.page -=1;
    this.listItem = this.appService.prevPage(this.page);
  }

  del(){
    this.listItem = this.appService.delItem();
  }
  newStatus(){
    this.appService.newStatus();
  };
  numLastPage(){
    this.lastPage = this.appService.numLastPage();
  }
}



