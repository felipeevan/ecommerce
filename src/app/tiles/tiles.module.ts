import { CartTileComponent } from './cart-tile/cart-tile.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ProdutoDialogComponent } from './produto-dialog/produto-dialog.component';
import { ProdutoTileComponent } from './produto-tile/produto-tile.component';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';


@NgModule({
  declarations: [
    CartTileComponent,
    ConfirmDialogComponent,
    ProdutoDialogComponent,
    ProdutoTileComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatCardModule,
    MatChipsModule
  ],
  exports:[
    CartTileComponent,
    ProdutoTileComponent
  ],
})
export class TilesModule { }
