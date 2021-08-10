import { Component, NgModule } from "@angular/core";
import { ComponentB } from "./moduleB.component";

@NgModule({
    declarations:[ComponentB],
    exports:[ComponentB]
})
export class ModuleB
{

}