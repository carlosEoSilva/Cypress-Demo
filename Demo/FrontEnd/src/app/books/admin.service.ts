import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor() { }

  private _admin= { userName: "CyAdmin", senha: "CyEnter"};
  private _autenticado:boolean= false;

  public getAutenticacao(){
    return this._autenticado;
  }

  public AdminLogin(userName:string, senha:string):void{
    if(userName === this._admin.userName && senha === this._admin.senha)
      this._autenticado= true;

    this._autenticado= false;
  }
}
