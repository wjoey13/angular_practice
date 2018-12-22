import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {DorneComponent} from './dorne/dorne.component';
import {NorthComponent} from './north/north.component';
import { combineLatest } from 'rxjs';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "dorne", component: DorneComponent},
  {path: "north", component: NorthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
