import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {GiphyService} from './giphy/giphy.service';
import {SharedModule} from './shared/shared.module';
import {AppRoutingModule} from './app-routing.module';
import {GiphyModule} from "./giphy/giphy.module";
import {ContatoModule} from "./contato/contato.module";
import {ContatoServiceService} from './contato/contato-service.service';
import {PagenotfoundModule} from './pagenotfound/pagenotfound.module';
import {InicioModule} from './inicio/inicio.module';
import { GiphySearchComponent } from 'giphy/giphy-search/giphy-search.component';
import { GiphySearchComponent } from 'giphy/giphy-search/giphy-search.component';
import { GiphySearchAutoComponent } from 'giphy/giphy-search/giphy-search-auto/giphy-search-auto.component';


@NgModule({
  declarations: [
    AppComponent,
    GiphySearchComponent,
    GiphySearchComponent,
    GiphySearchAutoComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    GiphyModule,
    ContatoModule,
    InicioModule,
    PagenotfoundModule

  ],
  providers: [GiphyService, ContatoServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
