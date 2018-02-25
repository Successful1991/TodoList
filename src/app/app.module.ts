import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DataComponent } from './data/data.component';
import { FormsModule} from "@angular/forms";
import { AlertModule} from "ngx-bootstrap";
import { PopoverModule } from 'ngx-bootstrap';
import { PopupComponent } from './popup/popup.component';


@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
    PopupComponent,
  ],
  imports: [
    PopoverModule.forRoot(),
    AlertModule.forRoot(),
    BrowserModule,
    FormsModule
  ],
  providers: [DataComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }




