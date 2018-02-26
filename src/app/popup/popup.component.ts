import { Component, OnInit } from '@angular/core';
import { Item} from "./item";
import { BsModalRef} from "ngx-bootstrap";
import {AppService} from "../app.service";

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  constructor(public bsModalRef:BsModalRef,
              private appService:AppService) { }

  items = new Item (
    0, 'имя', 'описание', 0, new Date , 0
  );

  ngOnInit() {
  }
  addItem(form) {
    if(form.items){
      this.appService.addItem(form.items);
    }
  }


}



