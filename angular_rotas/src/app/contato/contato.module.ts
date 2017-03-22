import { NgModule } from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {ContatoComponent} from "./contato.component";
import {ContatoRoutingModule} from "./contato-routing.module";

@NgModule({
  imports: [
    SharedModule,
    ContatoRoutingModule
  ],
  declarations: [ContatoComponent]
})
export class ContatoModule { }
