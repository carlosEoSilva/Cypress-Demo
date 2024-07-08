import { Injectable } from '@angular/core';
import { Observable, from, of } from 'rxjs';
import { Livro } from '../classes/livro.class';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LivrosServico {

  constructor(private _http:HttpClient) { }

  private _listaLivros: Livro[]= [
    {
      "id": 1,
      "titulo": "Harry Pother and the Philosopher's stone",
      "autor": "J.K. Rowling",
      "capa": "https://cdn.kobo.com/book-images/b705120b-930c-4bda-8652-103b85a0dd90/1200/1200/False/harry-potter-and-the-philosopher-s-stone-5.jpg",
      "lancamento": new Date()
    },
    {
      "id": 2,
      "titulo": "Divergent",
      "autor": "Veronica Roth",
      "capa": "https://m.media-amazon.com/images/I/91oNu+R7EUL._AC_UF1000,1000_QL80_.jpg",
      "lancamento": new Date()
    },
    {
      "id": 3,
      "titulo": "The Hunger Games",
      "autor": "Suzane Collins",
      "capa": "https://cdn.kobo.com/book-images/fcc61f79-6dc3-4578-a49b-9628deb9ae23/1200/1200/False/the-hunger-games-hunger-games-book-one.jpg",
      "lancamento": new Date()
    }
  ];

  private _url= "https://localhost:7238/api/Demo/";

  public getProximoId():number{
    let ultimoLivro:Livro;

    ultimoLivro= this._listaLivros.reduce((accumulator:Livro, current:Livro)=>{
        return accumulator.id > current.id ? accumulator : current;
      });

    return ultimoLivro.id + 1;
  }

  public buscarTodosLivros():Observable<Livro[]>{
    return this._http.get<Livro[]>(this._url + "BuscarTodosLivros");
    // return of(this._listaLivros);
  }

  public salvarLivro(novoLivro:Livro):Observable<Livro>{
    this._listaLivros = Object.assign([], this._listaLivros);
    this._listaLivros.push(novoLivro);
    
    return of(novoLivro);
  }

  public editarLivro(livroEditado:Livro):Observable<Livro>{

    console.log(livroEditado);

    let index= this._listaLivros.findIndex((book)=>{ return book.id === livroEditado.id });
    this._listaLivros = Object.assign([], this._listaLivros);
    this._listaLivros[index]= livroEditado;
    
    return of(this._listaLivros[index]);
  }

  public apagarLivro(livroId:Number):Observable<Number>{
    this._listaLivros= Object.assign([], this._listaLivros);

    this._listaLivros= this._listaLivros.filter((x)=> x.id != livroId);
    
    return of(livroId);
  }

}
