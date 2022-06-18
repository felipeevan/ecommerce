import { AdminConsoleComponent } from './admin-console/admin-console.component';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { ProdutoComponent } from './produto/produto.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserconfigComponent } from './userconfig/userconfig.component';
import { AuthAutorize } from './auth-autorize.service';
import { AuthAdminGuard } from './auth-admin-guard.service';
import { AdminloginComponent } from './auth/adminlogin/adminlogin.component';
import { AuthClienteGuard } from './auth-cliente-guard.service';
import { AuthAdminNegate } from './auth-admin-negate.service';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent , canActivate:[AuthAdminNegate]},
  { path: 'auth', component: AuthComponent, canActivate:[AuthAutorize]},
  { path: 'login-admin', component: AdminloginComponent, canActivate:[AuthAutorize]},
  { path: 'produto', component: ProdutoComponent, canActivate:[AuthAdminNegate]},
  { path: 'dashboard', component: AdminConsoleComponent, canActivate: [AuthAdminGuard]},
  { path: 'config', component: UserconfigComponent, canActivate: [AuthClienteGuard]},

  { path: '**', redirectTo: 'home'},
  //{ path: 'login', component: LoginComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
