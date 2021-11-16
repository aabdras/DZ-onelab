import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, NgForm, ReactiveFormsModule} from "@angular/forms";
import { TransactionComponent } from './transaction/transaction.component';
import {DatePipe} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    TransactionComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
      ReactiveFormsModule,

    ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
