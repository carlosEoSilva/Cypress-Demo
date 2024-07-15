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

  public login(userName:string, senha:string){
    this._servico.AdminLogin(userName, senha);

    if(this._servico.getAutenticacao()){
      this._router.navigateByUrl("home");
    }
    else{
      this._snackBar.abrir("usuário ou senha inválidos");
    }
  }

}
