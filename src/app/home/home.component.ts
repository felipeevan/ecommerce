import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  categorias = [
    'Anos 70',
    'Jogos',
    'Grandes Sucessos',
    'Anos 80',
    'Underground'
  ]

  discos = []

  constructor(public clienteService: ClienteService) { }

  ngOnInit(): void {
    this.clienteService.listarProduto().toPromise().then(
      (response) => {
        let data = JSON.parse(response.data);
        this.discos = data
      }
    )
  }

}
