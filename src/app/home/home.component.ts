import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  discos = [
    {
      'nome': 'Golden Hour',
      'artista': 'Kacey Musgraves',
      'preco': 51.90,
      'capa': 'https://m.media-amazon.com/images/I/A11LiwhOyhL._AC_SL1500_.jpg',
      'categorias': [this.categorias[0]]
    },

    {
      'nome': '1989 Deluxe',
      'artista': 'Taylor Swift',
      'preco': 49.50,
      'capa': 'https://studiosol-a.akamaihd.net/uploadfile/letras/albuns/1/5/0/9/416201569604251.jpg',
      'categorias': [this.categorias[2]]
    },
    {
      'nome': 'Born To Die - Paradise Edition',
      'artista': 'Lana Del Rey',
      'preco': 47.80,
      'capa':'https://m.media-amazon.com/images/I/61VvC2SEPsL._AC_SX679_.jpg',
      'categorias': [this.categorias[0], this.categorias[1], this.categorias[2], this.categorias[3], this.categorias[4]]
    },
    {
      'nome': '30',
      'artista': 'Adele',
      'preco': 31.90,
      'capa':'https://m.media-amazon.com/images/I/71-llhQmneL._AC_SX425_.jpg',
      'categorias': [this.categorias[3]]
    },
    {
      'nome': 'Unlimited Love',
      'artista': 'Red Hot Chili Peppers',
      'preco': 31.90,
      'capa':'https://m.media-amazon.com/images/I/61Ky4cvAuYL._AC_SY450_.jpg',
      'categorias': [this.categorias[0]]
    },
    {
      'nome': 'Bang',
      'artista': 'Anitta',
      'preco': 18.90,
      'capa':'https://images-americanas.b2w.io/produtos/01/00/item/125484/5/125484512_1GG.jpg',
      'categorias': [this.categorias[3]]
    },
    {
      'nome': 'Let Go',
      'artista': 'Avril Lavigne',
      'preco': 38.90,
      'capa':'https://m.media-amazon.com/images/I/715rxIQNZTL._AC_SL1500_.jpg',
      'categorias': [this.categorias[3]]
    },
    {
      'nome': 'Scorpion',
      'artista': 'Drake',
      'preco': 45.90,
      'capa':'https://m.media-amazon.com/images/I/71SBdRjtrVL._AC_SY355_.jpg',
      'categorias': [this.categorias[4]]
    },
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateTo(path: String){
    this.router.navigate([path]);
  }

}
