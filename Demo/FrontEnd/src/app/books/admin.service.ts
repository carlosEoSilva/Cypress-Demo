import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor() { }

  private _admin= { userName: "CyAdmin", senha: "CyEnter"};
  private _autenticado:boolean= false;

  public getAutenticacao(){
    // return this._autenticado;
    return true;
  }

  public AdminLogin(userName:string, senha:string):void{
    console.log(userName, senha);
    if(userName === this._admin.userName && senha === this._admin.senha){
      this._autenticado= true;
    }
    else{
      this._autenticado= false;
    }
  }

  public AdminLogout(){
    this._autenticado= false;
  }
}
