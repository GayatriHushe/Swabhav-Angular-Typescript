import { Component, OnInit } from '@angular/core';
import { IBall } from './IBall';

@Component({
  selector: 'sw-blueBallGame',
  templateUrl: './blue-ball.component.html',
  styleUrls: ['./blue-ball.component.css']
})
export class BlueBallComponent implements OnInit {

  balls:IBall[];
  ball:IBall;
  blueBall:number;
  turns:number;
  isWin:boolean;
  msg:String;
  constructor() { 
    this.ball={
      index:1,
      color:'red'
    }
    this.balls=[];
    this.blueBall=Math.floor(Math.random()*50+1);
    this.turns=0;
    this.isWin=false;
    this.msg="";
    console.log("Blue ball index no : "+this.blueBall)
  }

  createButton(){
    for(var i=0;i<50;i++){
      this.ball={index:i,color:'pink'};
      this.balls.push(this.ball);
      
     
    }
    return this.balls;
  }
  alert(e:IBall){
    this.turns++;
    if(e.index==this.blueBall && this.turns<4 && this.isWin==false){
        e.color="blue";
        this.isWin=true;
        this.msg="You Won The Game!!"
    }
    else if(e.index<this.blueBall && this.turns<4 && this.isWin==false){
      e.color="red";
      this.msg="Turns Left ="+(3-this.turns);
    }else if(e.index>this.blueBall && this.turns<4 && this.isWin==false){
      e.color="green";
      this.msg="Turns Left ="+(3-this.turns);
    }
    return e.color;
  }

  ngOnInit(): void {
  }

}


