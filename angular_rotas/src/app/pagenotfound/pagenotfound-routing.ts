import { Routes ,RouterModule } from '@angular/router';
import { ModuleWithProviders} from '@angular/core';
import {PagenotefoundComponent} from './pagenotfound.component';

export const routes: Routes = [
  {path:"**", component:PagenotefoundComponent}
];


export const routing: ModuleWithProviders  = RouterModule.forRoot(routes);
