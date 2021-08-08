import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IService } from './IService';
import * as moment from 'moment';
import { NodeWithI18n } from '@angular/compiler';
//npm install moment --save

@Component({
  selector: 'sw-numbers-api',
  templateUrl: './numbers-api-component.component.html',
  styleUrls: ['./numbers-api-component.component.css']
})
export class NumbersApiComponentComponent implements OnInit {

  myNum?:IService
  myNumList:IService[]
  input:number
  color:string

  constructor(private http:HttpClient) { 

    this.input=0;
    this.color="";
    this.myNumList=[]
  }

  getQuote(input:any)
  {
    this.http.get("http://numbersapi.com/"+this.input,{responseType:'text'}).subscribe((data)=>{
      if(input%2==0)
        this.color='pink';
      else
        this.color='blue';
      this.myNum={myColor:this.color,myData:data,createdTime:(moment().format()),myNumber:this.input,isDeleted:false}
      this.myNumList.unshift(this.myNum);
      console.log(this.myNumList)
      localStorage.setItem("myNumList",JSON.stringify(this.myNumList));

    })
    return this.myNumList;
  }

  delete(e:IService){
    console.log(e.myData);
    for(var i=0;i<this.myNumList.length;i++)
    {
      if(e.myNumber==this.myNumList[i].myNumber)
      {
        e.isDeleted=true;
      }
    }
    console.log(this.myNumList)
    localStorage.setItem("myNumList",JSON.stringify(this.myNumList));
  }

  ngOnInit(): void {
  }

}
