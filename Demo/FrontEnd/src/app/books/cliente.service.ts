import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../classes/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private _http:HttpClient) { }

  private _url= "https://localhost:7238/api/Demo/";
  
  

  

  public BuscarTodosClientes():Observable<Cliente[]>{
    return this._http.get<Cliente[]>(this._url + "BuscarTodosClientes");
  }

  
}
