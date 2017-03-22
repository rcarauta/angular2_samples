import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {GiphyService} from './giphy/giphy.service';
import {SharedModule} from './shared/shared.module';
import {AppRoutingModule} from './app-routing.module';
import {GiphyModule} from "./giphy/giphy.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    GiphyModule
  ],
  providers: [GiphyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
