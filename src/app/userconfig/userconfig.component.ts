import { CepApiService } from './../services/cep.service';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-userconfig',
  templateUrl: './userconfig.component.html',
  styleUrls: ['./userconfig.component.scss']
})
export class UserconfigComponent implements OnInit {
  formUser = new FormGroup({
    nome: new FormControl('', Validators.required),
    email: new FormControl({value: '', disabled: true}),
    login: new FormControl('', [Validators.required, this.ageRangeValidator]),
    senha: new FormControl('', [Validators.required, Validators.minLength(8)]),
  })

  formAddress = new FormGroup({
    cep: new FormControl('', Validators.required),
    rua: new FormControl('', Validators.required),
    numero: new FormControl('', Validators.required),
    bairro: new FormControl('', Validators.required),
    complemento: new FormControl(''), 
  })


  userOriginalInfo = {
    'nome': 'Fulando de Tal',
    'email': 'fulanindoidin@email.com',
    'login': 'xXfulaninXx'
  }
  
  constructor(public dialog: MatDialog, private cepService: CepApiService) {
  }

  ngOnInit(): void {
    this.setInfosOriginal()
  }

  ageRangeValidator(control: AbstractControl): { [key: string]: boolean } | null {
    if (control.value == 'FELIPE') {
        return { 'loginUsado': true };
    }
    return null;
  }

  setInfosOriginal(){
    this.formUser.controls['nome'].setValue(this.userOriginalInfo.nome)
    this.formUser.controls['email'].setValue(this.userOriginalInfo.email)
    this.formUser.controls['login'].setValue(this.userOriginalInfo.login)
    this.formUser.controls['senha'].setValue('********')
  }

  salvarInfo(){
    if (this.formUser.valid) {
      
    }
  }

  salvarEndereco(){
    if (this.formAddress.valid) {

    }
  }

  resetEndereco(){
    this.formAddress.reset()
  }

  pesquisarCEP(){
    let cep = this.formAddress.controls['cep'].value;
    if(cep==undefined || cep.length!=9){
      return;
    }

    this.cepService.getCep(cep).toPromise().then(
      res => {
        this.formAddress.controls['rua'].setValue(res['logradouro'])
        this.formAddress.controls['bairro'].setValue(res['bairro'])
      }
    ).catch(error => {
      console.log(error)
    })
  }

  resetSenha(focus: boolean){
    if(focus && this.formUser.controls['senha'].value=='********'){
      this.formUser.controls['senha'].setValue('')
    }
    else{
      if(this.formUser.controls['senha'].value == ''){
        this.formUser.controls['senha'].setValue('********')
      }
    }
  }
}
