import { SidenavService } from './../sidenav/sidenav.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../services/session.service';
import { ConfirmDialogComponent } from '../tiles/confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  logado: boolean | undefined;
  isAdmin: boolean | undefined;
  
  constructor(private sidenav: SidenavService, private router: Router, public dialog: MatDialog,
    private sessionService: SessionService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.logado = this.sessionService.isLogged()
    this.isAdmin = this.sessionService.isAdmin()
  }

  toggleRightSidenav() {
    this.sidenav.toggle();
  }

  toggleMenuSidenav() {
    this.sidenav.toggleMenu();
  }

  navigateTo(path: String){
    this.router.navigate([path]);
  }
  
  deslogar(){
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: "400px",
      data: {
        'title': "Deseja realmente deslogar?",
      }
    });

    dialogRef.afterClosed().subscribe(async dialogResult => {
      this.sessionService.deslogar()
    });

  }
}
