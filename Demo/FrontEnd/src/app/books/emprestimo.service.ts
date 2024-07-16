import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NovoEmprestimo } from '../classes/novoEmprestimo';
import { Observable } from 'rxjs';
import { Emprestimo } from '../classes/emprestimo';

@Injectable({
  providedIn: 'root'
})
export class EmprestimoService {

  constructor(private _http:HttpClient) { }

  private _url= "https://localhost:7238/api/Demo/Emprestimo/";

  public postEmpresimo(emprestimo:NovoEmprestimo):Observable<Emprestimo>{
    return this._http.post<Emprestimo>(this._url + "NovoEmprestimo", emprestimo);
  }
}
