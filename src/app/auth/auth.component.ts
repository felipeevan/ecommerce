import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  loginForm = new FormGroup({
    login: new FormControl('', Validators.required),
    senha: new FormControl('', [Validators.required, Validators.minLength(8)]),
  }, 
  { updateOn: 'submit' }
  )

  @ViewChild('loginNgForm', {static: true}) formLogin: any;
  @ViewChild('registroNgForm', {static: true}) formRegistro: any;

  registroForm = new FormGroup({
    nome: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required]),
    login: new FormControl('', [Validators.required, Validators.minLength(8)]),
    senha: new FormControl('', [Validators.required, Validators.minLength(8)]),
    csenha: new FormControl('', [Validators.required, Validators.minLength(8)]),
  },
  { updateOn: 'submit' }
  )

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  logar(){
    if (this.loginForm.valid) {
      console.log('OI')
    }
  }

  registrar(){
    console.log('oi')
  }

  resetForm(){
    this.formLogin.resetForm();
    this.formRegistro.resetForm();
  }
}
