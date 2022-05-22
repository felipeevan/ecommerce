import { CepApiService } from './services/cep.service';
import { HomeModule } from './home/home.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeaderModule } from './header/header.module';
import { SidenavModule } from './sidenav/sidenav.module';
import { TilesModule } from './tiles/tiles.module';
import { LayoutModule } from './layout/layout.module';
import { AuthModule } from './auth/auth.module';
import { PedidosComponent } from './pedidos/pedidos.component';
import { AdminConsoleModule } from './admin-console/admin-console.module';
import {MatChipsModule} from '@angular/material/chips';
import { ProdutoComponent } from './produto/produto.component';
import { UserConfigModule } from './userconfig/userconfig.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PedidosComponent,
    ProdutoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HeaderModule,
    SidenavModule,
    TilesModule,
    HomeModule,
    LayoutModule,
    MatChipsModule,
    AuthModule,
    AdminConsoleModule,
    UserConfigModule,
    HttpClientModule
  ],
  providers: [
    CepApiService,

  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
