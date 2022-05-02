import { AdminConsoleComponent } from './admin-console/admin-console.component';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserconfigComponent } from './userconfig/userconfig.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'auth', component: AuthComponent},
  { path: 'dashboard', component: AdminConsoleComponent},
  { path: 'config', component: UserconfigComponent },



  { path: '**', redirectTo: 'home'},
  //{ path: 'login', component: LoginComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
