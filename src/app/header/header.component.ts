import { SidenavService } from './../sidenav/sidenav.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private sidenav: SidenavService, private router: Router) { }

  ngOnInit(): void {
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
}
