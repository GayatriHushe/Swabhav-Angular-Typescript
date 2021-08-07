import { Component } from '@angular/core';
import { IStudent } from './IStudent';


@Component({
  selector: 'sw-welcome',
  templateUrl: './student.component.html'
})


export class StudentComponent {
  public student:IStudent
  public students?:IStudent[]
  imgMaxWidth:number
  imgMaxHeight:number
  
  constructor()
  {
    this.imgMaxHeight=100
    this.imgMaxWidth=100
    this.student={
        rollNo:101,
        name:"Gayatri",
        cgpa:9.57,
        picture:"assets/login_icon.jpg"
    }
  }

  load(): void{
    this.students=[
      {rollNo:101, name:"Student1", cgpa:9, picture:"assets/login_icon.jpg"},
      {rollNo:102, name:"Student2", cgpa:6, picture:"assets/login_icon.jpg"},
      {rollNo:103, name:"Student3", cgpa:2, picture:"assets/login_icon.jpg"},
      {rollNo:104, name:"Student4", cgpa:10, picture:"assets/login_icon.jpg"}
  ],
  console.log(this.students);
  }

  cgpaToColor(cgpa: number): String {
    if (cgpa > 7) {
      return 'pink';
    }
    if (cgpa > 4) {
      return 'blue';
    }
    return 'red';
  }

  // ngOnInit():void{}

  }

