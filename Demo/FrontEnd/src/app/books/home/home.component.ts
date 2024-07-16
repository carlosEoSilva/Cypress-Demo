import { Component, OnInit } from '@angular/core';
import { LivrosServico } from '../livros.service';
import { Livro } from 'src/app/classes/livro.class';
import { MatDialog } from '@angular/material/dialog';
import { LoanModalComponent } from '../loan-modal/loan-modal.component';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private _servico:LivrosServico, 
    public dialog: MatDialog,
    private _router:Router,
    public srvAdmin:AdminService) { }

  ngOnInit(): void {
    this._atualizarListaLivros();

    this.dialog.afterAllClosed.subscribe(() => {
      this._atualizarListaLivros();
    });
  }

  private _atualizarListaLivros(){
    this._servico.buscarTodosLivros().subscribe({
      next: data=> {this.listaLivros= data},
      error: err=> console.log(err)
    });
  }

  public listaLivros:Livro[]= [];

  public openDialog(livroId:number|null): void {
    const dialogRef = this.dialog.open(LoanModalComponent, {
      width: '400px',
      data: { livroId: livroId },
    });
  }

    public reloadCurrentRoute() {
      let currentUrl = this._router.url;
      this._router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
          this._router.navigate([currentUrl]);
      });
  }


}
