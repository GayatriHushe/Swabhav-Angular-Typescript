import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { StudentComponent } from 'src/student/student.component';
import { AppComponent } from './app.component';
import { TwowaybindComponent } from './twowaybind/twowaybind.component';
import { BlueBallComponent } from './blue-ball/blue-ball.component';
import { TwoWayServiceComponent } from './two-way-service/two-way-service.component';
import { ModuleA } from './moduleA';
import { ModuleB } from './moduleB';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    TwowaybindComponent,
    BlueBallComponent,
    TwoWayServiceComponent
  ],
  imports: [
    BrowserModule,FormsModule,ModuleA,ModuleB
  ],
  providers: [],
    bootstrap: [TwoWayServiceComponent]
})
export class AppModule { }
