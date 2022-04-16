import { SidenavService } from './../sidenav/sidenav.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private sidenav: SidenavService) { }

  ngOnInit(): void {
  }

  toggleRightSidenav() {
    this.sidenav.toggle();
  }
}
