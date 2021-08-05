import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {LayoutComponent} from "./layout/layout.component";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [

    LayoutComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
  ],
  providers: [],
})
export class SharedModule { }
