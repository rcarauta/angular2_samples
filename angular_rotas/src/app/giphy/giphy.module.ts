import { NgModule } from '@angular/core';
import { GiphyComponent } from './giphy.component';
import {GiphyRoutingModule} from "./giphy-routing.module";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [
    GiphyComponent
  ],
  exports: [
    GiphyComponent
  ],
  imports: [
    SharedModule,
    GiphyRoutingModule
  ],
  providers: []
})
export class GiphyModule { }
