import { Component, OnInit } from '@angular/core';
import { DataService } from './DataService';
import { filter,map } from 'rxjs/operators';

@Component({
  selector: 'sw-twoWayService',
  templateUrl: './two-way-service.component.html',
  styleUrls: ['./two-way-service.component.css']
})
export class TwoWayServiceComponent implements OnInit {

  constructor(private dataSvc:DataService) { 
    console.log("inside constructor")
  }

  //Synchronous : 

  // ngOnInit(): void {
  //   console.log("inside oninit");
  //   console.log(this.dataSvc.getData())
  //   console.log("end of oninit")
  // }

  //Asynchronous : 

  // ngOnInit():void{
  //   let dataServiceObservable;
  //   console.log("inside oninit");

  //   dataServiceObservable=this.dataSvc.getDataAsync()
  //             .subscribe((d)=>{
  //               console.log(d)
  //               console.log("end of getDataAsync")
  //             })
  //   console.log("end of oninit")
  // }

  //Async2 : Observable with range and subscribe

  // ngOnInit():void{
  //   let dataServiceObservable;
  //   console.log("inside oninit");

  //   dataServiceObservable=this.dataSvc.getData3()
  //             .subscribe((d)=>{
  //               console.log(d)
  //               console.log("end of subscribe")
  //             })
  //   console.log("end of oninit")
  // }

  // Asyn : Range and pipe

  ngOnInit():void{
    let dataServiceObservable;
    console.log("inside oninit");

    dataServiceObservable=this.dataSvc.getData3()
              .pipe(
                map((d:any) => d*d),
                filter(d=>d>50)
              )
              .subscribe((d)=>{
                console.log(d)
                console.log("end of subscribe")
              })
    console.log("end of oninit")
  }

}
