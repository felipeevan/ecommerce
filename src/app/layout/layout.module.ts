import { HeaderModule } from './../header/header.module';
import { SidenavModule } from './../sidenav/sidenav.module';
import { DefaultComponent } from './default/default.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    DefaultComponent
  ],
  imports: [
    CommonModule,
    SidenavModule,
    HeaderModule
  ],
  exports:[
    DefaultComponent
  ],
})
export class LayoutModule { }
