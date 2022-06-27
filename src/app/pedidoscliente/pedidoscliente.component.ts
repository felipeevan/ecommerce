import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pedidoscliente',
  templateUrl: './pedidoscliente.component.html',
  styleUrls: ['./pedidoscliente.component.scss']
})
export class PedidosclienteComponent implements OnInit {
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

  constructor() { }

  ngOnInit(): void {
  }

}
