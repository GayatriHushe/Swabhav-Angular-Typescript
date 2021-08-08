import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'sw-numbers-api',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myNumber:Number
  quote:String
  color:String;
  myList:String[]
  constructor(private http:HttpClient) { 
    this.myNumber=0;
    this.quote="";
    this.color="";
    this.myList=[]
  }

  getQuote(myNumber:any)
  {
    this.http.get("http://numbersapi.com/"+myNumber,{responseType:'text'}).subscribe((data)=>{this.myList.push(data)})
    return this.quote;
  }


}
