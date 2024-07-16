import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LivrosServico } from '../livros.service';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarService } from '../snackbar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private _servico:AdminService,
    private _snackBar: SnackbarService,
    private _router:Router) { }

  ngOnInit(): void {
  }

  public loginForm:FormGroup= new FormGroup({
    inputUserName: new FormControl(),
    inputSenha: new FormControl()  
  });

  public login(form:FormGroup){
    if(!form.valid){
      this._snackBar.abrir("usuário ou senha inválidos");
    }
    else{
      let usuario= form.controls['inputUserName'].value;
      let senha= form.controls['inputSenha'].value;

      this._servico.AdminLogin(usuario, senha);
      console.log(usuario, senha);

      if(!this._servico.getAutenticacao())
        this._snackBar.abrir("usuário ou senha inválidos");
      else
        this._router.navigateByUrl("home");
    }
  }

}
