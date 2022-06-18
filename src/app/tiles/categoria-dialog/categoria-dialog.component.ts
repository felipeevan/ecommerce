import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-categoria-dialog',
  templateUrl: './categoria-dialog.component.html',
  styleUrls: ['./categoria-dialog.component.scss']
})
export class CategoriaDialogComponent implements OnInit {
  editMode: boolean = false;
  categoria: any;
  id!: number;
  title!: String;

  categoriaForm = new FormGroup({
    nome: new FormControl('', [Validators.required]),
  }, 
  { updateOn: 'submit' }
  )

  constructor(public dialogRef: MatDialogRef<CategoriaDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.title = data.edit?"Editar Categoria": "Novo Categoria";
    this.id = data.edit?data.categoria.id:null;
    this.categoria = data.edit?data.categoria:null;
    this.editMode = data.edit;
  }

  ngOnInit(): void {
  }

  salvar(){
    if (this.categoriaForm.valid) {
      if(this.editMode){

      }else{
        
      }
    }
  }



}
