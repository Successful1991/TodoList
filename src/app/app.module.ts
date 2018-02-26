import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormsModule} from "@angular/forms";


import { PopupComponent } from './popup/popup.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import {PopupService} from "./popup/popup.service";
import {DataService} from "./data/data.service";
import {AppService} from "./app.service";
import {BsModalRef} from "ngx-bootstrap";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    PopupComponent,
  ],
  imports: [
    ModalModule.forRoot(),
    HttpClientModule,
    BrowserModule,
    FormsModule
  ],
  providers: [DataService,PopupService, AppService, PopupComponent, BsModalRef, HttpClientModule],
  bootstrap: [AppComponent],
  entryComponents: [
    PopupComponent
  ]
})
export class AppModule { }





