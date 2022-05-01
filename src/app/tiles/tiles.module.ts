import { CartTileComponent } from './cart-tile/cart-tile.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ProdutoDialogComponent } from './produto-dialog/produto-dialog.component';


@NgModule({
  declarations: [
    CartTileComponent,
    ConfirmDialogComponent,
    ProdutoDialogComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule
  ],
  exports:[
    CartTileComponent
  ],
})
export class TilesModule { }
