import { Component, NgModule } from "@angular/core";
import { ComponentA } from "./moduleA.component";

@NgModule({
    declarations:[ComponentA],
    exports:[ComponentA]
})
export class ModuleA
{

}