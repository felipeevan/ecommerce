import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent implements OnInit {
  categorias = [
    'Carros',
    'Motos',
    'Brinquedos',
    'aaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaa',
    'mais uma categoria'
  ]

  discos = [
    {
      'nome': 'Golden Hour',
      'artista': 'Kacey Musgraves',
      'preco': 51.90,
      'capa': 'https://m.media-amazon.com/images/I/A11LiwhOyhL._AC_SL1500_.jpg'
    },

    {
      'nome': '1989 Deluxe',
      'artista': 'Taylor Swift',
      'preco': 49.50,
      'capa': 'https://studiosol-a.akamaihd.net/uploadfile/letras/albuns/1/5/0/9/416201569604251.jpg'
    },
    {
      'nome': 'Born To Die - Paradise Edition',
      'artista': 'Lana Del Rey',
      'preco': 47.80,
      'capa':'https://m.media-amazon.com/images/I/61VvC2SEPsL._AC_SX679_.jpg'
    },
    {
      'nome': '30',
      'artista': 'Adele',
      'preco': 31.90,
      'capa':'https://m.media-amazon.com/images/I/71-llhQmneL._AC_SX425_.jpg'
    },
    {
      'nome': 'Unlimited Love',
      'artista': 'Red Hot Chili Peppers',
      'preco': 31.90,
      'capa':'https://m.media-amazon.com/images/I/61Ky4cvAuYL._AC_SY450_.jpg'
    },
    {
      'nome': 'Bang',
      'artista': 'Anitta',
      'preco': 18.90,
      'capa':'https://images-americanas.b2w.io/produtos/01/00/item/125484/5/125484512_1GG.jpg'
    },
    {
      'nome': 'Let Go',
      'artista': 'Avril Lavigne',
      'preco': 38.90,
      'capa':'https://m.media-amazon.com/images/I/715rxIQNZTL._AC_SL1500_.jpg'
    },
    {
      'nome': 'Scorpion',
      'artista': 'Drake',
      'preco': 45.90,
      'capa':'https://m.media-amazon.com/images/I/71SBdRjtrVL._AC_SY355_.jpg'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
