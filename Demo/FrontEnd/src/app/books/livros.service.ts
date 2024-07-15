import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Livro } from '../classes/livro.class';
import { HttpClient } from '@angular/common/http';
import { NovoLivro } from '../classes/novoLivro';

@Injectable({
  providedIn: 'root'
})
export class LivrosServico {

  constructor(private _http:HttpClient) { }

  private _url= "https://localhost:7238/api/Demo/";
  

  public buscarTodosLivros():Observable<Livro[]>{
    return this._http.get<Livro[]>(this._url + "BuscarTodosLivros");
    // return of(this._listaLivros);
  }

  public buscarLivroPorId(id:number):Observable<Livro>{
    return this._http.get<Livro>(this._url + "BuscarLivroPorId/" + id);
  }

  public editarLivro(livro:Livro):Observable<Livro>{
    console.log(livro);
    return this._http.post<Livro>(this._url + "salvarLivro", livro);
  }

  public novoLivro(livro:NovoLivro):Observable<boolean>{
    console.log(livro);
    return this._http.post<boolean>(this._url + "NovoLivro", livro);
  }

  public apagarLivro(livroId:number):Observable<Number>{
    return this._http.delete<number>(this._url + "ApagarLivro/" + livroId);
  }

}
