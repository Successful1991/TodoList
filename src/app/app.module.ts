import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DataComponent } from './data/data.component';
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [DataComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
