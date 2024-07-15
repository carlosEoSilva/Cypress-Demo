import { Component, OnInit } from '@angular/core';
import { LivrosServico } from '../livros.service';
import { Livro } from 'src/app/classes/livro.class';
import { MatDialog } from '@angular/material/dialog';
import { LoanModalComponent } from '../loan-modal/loan-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _servico:LivrosServico, public dialog: MatDialog) { }

  ngOnInit(): void {
    this._servico.buscarTodosLivros().subscribe({
      next: data=> {this.listaLivros= data},
      error: err=> console.log(err)
    });
  }

  public listaLivros:Livro[]= [];

  public openDialog(): void {
    const dialogRef = this.dialog.open(LoanModalComponent, {
      width: '400px'
      // data: {name: this.name, animal: this.animal},
    });



  }

}
