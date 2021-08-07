import { Component } from '@angular/core';

@Component({
  selector: 'sw-welcome1',
  templateUrl: './app.component.html'
})


export class AppComponent {
  student="Gayatri"
  msg:String
  
  constructor()
  {
    this.msg="Welcome to welcome component";
  }
}
