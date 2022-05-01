import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-sidenav-drawer',
  templateUrl: './sidenav-drawer.component.html',
  styleUrls: ['./sidenav-drawer.component.scss']
})
export class SidenavDrawerComponent implements OnInit {


  cart_items = [
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    ''
  ]
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  irAoPagamento(){
  }
}
