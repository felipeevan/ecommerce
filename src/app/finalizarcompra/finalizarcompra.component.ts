import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';


@Component({
  selector: 'app-finalizarcompra',
  templateUrl: './finalizarcompra.component.html',
  styleUrls: ['./finalizarcompra.component.scss']
})
export class FinalizarcompraComponent implements OnInit {
  cart_items: any;
  precoTotalProdutos: any = 0; 

  constructor(public cartService: CartService, public http: HttpClient) { }

  ngOnInit(): void {
    this.cartService.getCarrinho().subscribe(
      (res: any[]) => {
        this.cart_items = res
        let total = 0;
        this.cart_items?.forEach((el: any) => {
          this.http.post(`/smdecommerce/ObterProduto`, {"id": el['id']}).toPromise().then((res: any) =>{
            let data = JSON.parse(res.data);
            let precototal = data['preco']*el['q']
            total += precototal;
            this.precoTotalProdutos = total;
          })
        });
      }
    )
    
    this.cartService.loadCarrinho()
  }

}
