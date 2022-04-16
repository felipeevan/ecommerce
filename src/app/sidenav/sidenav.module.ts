import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidenavComponent } from './sidenav.component';

import {MatSidenavModule} from '@angular/material/sidenav';
import { SidenavService } from './sidenav.service';
import { SidenavDrawerComponent } from './sidenav-drawer/sidenav-drawer.component';


@NgModule({
  declarations: [
      SidenavComponent,
      SidenavDrawerComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule
  ],
  exports:[
    SidenavComponent
  ],
  providers: [SidenavService]
})
export class SidenavModule { }
