import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-drawer',
  templateUrl: './menu-drawer.component.html',
  styleUrls: ['./menu-drawer.component.scss']
})
export class MenuDrawerComponent implements OnInit {
  categorias = [
    {
      'nome': 'Anos 70',
      'icon': 'dvr'
    },
    {
      'nome': 'Anos 70',
      'icon': 'dvr'
    },
    {
      'nome': 'Populares',
      'icon': 'dvr'
    }
  ]

  
  constructor() { }

  ngOnInit(): void {
  }


  goToCategoria(categoria: any){
    console.log(categoria)
  }
}
