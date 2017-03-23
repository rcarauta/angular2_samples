import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {routing} from "./pagenotfound-routing";
import {PagenotefoundComponent} from "./pagenotfound.component";

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [ PagenotefoundComponent],
  exports: [PagenotefoundComponent]
})
export class PagenotfoundModule { }
