import { Component, OnInit } from '@angular/core';
import { Item} from "./item";

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  // priority;
  // title;
  // description;
  // estimate;
  // create_date;
  // state = 0;
  constructor() { }
  // items = new Item (
  //   this.priority,
  //   this.title,
  //   this.description ,
  //   this.estimate,
  //   this.create_date,
  //   this.state
  // );
  items = new Item (
    0, 'имя', 'описание', 0, new Date, 0
  );

  ngOnInit() {
  }
  addItem(form) {
    console.log(form);

  }
}



