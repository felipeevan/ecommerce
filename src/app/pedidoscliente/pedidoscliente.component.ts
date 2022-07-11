import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../services/cliente.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-pedidoscliente',
  templateUrl: './pedidoscliente.component.html',
  styleUrls: ['./pedidoscliente.component.scss']
})
export class PedidosclienteComponent implements OnInit {

  constructor(private router: Router, private clienteService: ClienteService) { }

  statuss = ["Pagamento: Crédito", "Status Pagamento: ", "Entrega: Física", "Status Entrega: "]
  pedidos: any | undefined = [
    {}, {}
  ]
  columns = [
    {
      'name': 'nome',
      'title': 'Nome'
    },
    {
      'name': 'preco',
      'title': 'Preço'
    },
    {
      'name': 'quantidade',
      'title': 'Pagamento'
    },
    {
      'name': 'total',
      'title': 'Total'
    }
  ]

  displayedColumns = this.columns.map(c => c.name);

  ngOnInit(): void {
  }

}
