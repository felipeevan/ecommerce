import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LegendPosition } from '@swimlane/ngx-charts';
import { CategoriaDialogComponent } from '../tiles/categoria-dialog/categoria-dialog.component';
import { ConfirmDialogComponent } from '../tiles/confirm-dialog/confirm-dialog.component';
import { ProdutoDialogComponent } from '../tiles/produto-dialog/produto-dialog.component';

@Component({
  selector: 'app-admin-console',
  templateUrl: './admin-console.component.html',
  styleUrls: ['./admin-console.component.scss']
})
export class AdminConsoleComponent implements OnInit {
  public legendPosition: LegendPosition = LegendPosition.Below;
  view: [number,number] = [700, 400];

  discosPorVenda = [
    {
      "name": "Em estoque",
      "value": 10
    },
    {
      "name": "Pouco Estoque",
      "value": 3
    },
    {
      "name": "Sem estoque",
      "value": 5
    },
  ];

  categorias = []

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

  columnsCategorias = [
    {
      'name': 'nome',
      'title': 'Nome'
    },
  ]

  columns = [
    {
      'name': 'nome',
      'title': 'Nome'
    },
    {
      'name': 'artista',
      'title': 'Artista'
    },
    {
      'name': 'preco',
      'title': 'Preço'
    },
  ]

  

  displayedColumns = this.columns.map(c => c.name);
  displayedColumnsCategorias = this.columnsCategorias.map(c => c.name);


  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.displayedColumns = [...this.displayedColumns, 'star'];
  }

  addModal(){
    const dialogRef = this.dialog.open(ProdutoDialogComponent, {
      width: "600px",
      data: {
        'edit': false
      }
    });
  }

  editModal(produto: any){
    const dialogRef = this.dialog.open(ProdutoDialogComponent, {
      width: "600px",
      data: {
        'edit': true,
        'produto': produto
      }
    });
  }

  excluir(): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: "400px",
      data: {
        'title': "Deseja excluir?",
        'message': "Voce quer mesmo excluir esse item?"
      }
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      console.log(dialogResult);
    });
  }


  addCategoriaModal(){
    const dialogRef = this.dialog.open(CategoriaDialogComponent, {
      width: "600px",
      data: {
        'edit': false
      }
    });
  }

  editCategoriaModal(categoria: any){
    const dialogRef = this.dialog.open(CategoriaDialogComponent, {
      width: "600px",
      data: {
        'edit': true,
        'categoria': categoria
      }
    });
  }

  excluirCategoria(): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: "400px",
      data: {
        'title': "Deseja excluir?",
        'message': "Voce quer mesmo excluir esse item?"
      }
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      console.log(dialogResult);
    });
  }
}
