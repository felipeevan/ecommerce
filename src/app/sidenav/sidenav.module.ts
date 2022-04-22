import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidenavComponent } from './sidenav.component';

import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SidenavService } from './sidenav.service';
import { SidenavDrawerComponent } from './sidenav-drawer/sidenav-drawer.component';
import { TilesModule } from '../tiles/tiles.module';


@NgModule({
  declarations: [
      SidenavComponent,
      SidenavDrawerComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    TilesModule
  ],
  exports:[
    SidenavComponent
  ],
  providers: [SidenavService]
})
export class SidenavModule { }
