import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA,  } from '@angular/material/dialog';

@Component({
  selector: 'app-produto-dialog',
  templateUrl: './produto-dialog.component.html',
  styleUrls: ['./produto-dialog.component.scss']
})
export class ProdutoDialogComponent implements OnInit {
  editMode: boolean = false;
  produto: any;
  id!: number;
  title!: String;

  constructor(public dialogRef: MatDialogRef<ProdutoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.title = data.edit?"Editar Produto": "Novo Produto";
    this.id = data.edit?data.produto.id:null;
    this.produto = data.edit?data.produto:null;
    this.editMode = data.edit;
  }

  ngOnInit(): void {
  }

}
