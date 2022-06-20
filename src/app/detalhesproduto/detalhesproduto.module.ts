import { NgModule } from '@angular/core';
import { DetalhesprodutoComponent } from './detalhesproduto.component';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';


@NgModule({
  declarations: [
    DetalhesprodutoComponent
  ],
  imports: [
    MatIconModule,
    MatDividerModule,
  ],
  exports:[
    DetalhesprodutoComponent
  ],
})
export class DetalhesprodutoModule { }