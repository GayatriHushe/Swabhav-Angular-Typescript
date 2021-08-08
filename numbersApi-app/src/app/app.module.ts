import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NumbersApiComponentComponent } from './numbers-api-component/numbers-api-component.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
  
    NumbersApiComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,FormsModule
  ],
  providers: [],
  bootstrap: [NumbersApiComponentComponent]
})
export class AppModule { }
