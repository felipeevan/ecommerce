import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-sidenav-drawer',
  templateUrl: './sidenav-drawer.component.html',
  styleUrls: ['./sidenav-drawer.component.scss']
})
export class SidenavDrawerComponent implements OnInit {
  cart_items: any = []
  constructor(private router: Router, private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getCarrinho().subscribe(
      res => {
        this.cart_items = res
      }
    )
    this.cartService.loadCarrinho()
  }

  irAoPagamento(){
  }
}
