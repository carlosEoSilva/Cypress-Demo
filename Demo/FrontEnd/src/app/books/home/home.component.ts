import { Component, OnInit } from '@angular/core';
import { LivrosServico } from '../livros.service';
import { Livro } from 'src/app/classes/livro.class';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _servico:LivrosServico) { }

  ngOnInit(): void {
    this._servico.buscarTodosLivros().subscribe({
      next: data=> {console.log(data); this.listaLivros= data},
      error: err=> console.log(err)
    });
  }

  public listaLivros:Livro[]= [];



  

}
