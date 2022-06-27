import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { map } from 'rxjs/operators';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-detalhesproduto',
  templateUrl: './detalhesproduto.component.html',
  styleUrls: ['./detalhesproduto.component.scss']
})
export class DetalhesprodutoComponent implements OnInit {

  idProduto: any;
  produto: any = {};
  constructor(public route: ActivatedRoute, private router: Router, private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.route
      .queryParams
      .subscribe(params => {
        if(params['id']){
          this.idProduto = params['id']
        }else{
          this.router.navigate([''])
        }
      }
    );
    this.clienteService.getProdutoById(this.idProduto).toPromise().then(
      (response) => {
        let data = JSON.parse(response.data);
        this.produto = data;
      }
    ).catch(_ => this.router.navigate(['']))
  }

}
