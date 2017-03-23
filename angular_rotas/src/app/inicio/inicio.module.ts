import { NgModule } from '@angular/core';
import {SharedModule} from "../shared/shared.module";
import {InicioComponent} from "./inicio.component";
import {InicioRoutingModule} from "./inicio.module.routing";

@NgModule({
  declarations: [
    InicioComponent
  ],
  exports: [
    InicioComponent
  ],
  imports: [
    SharedModule,
    InicioRoutingModule
  ],
  providers: []
})
export class InicioModule { }
