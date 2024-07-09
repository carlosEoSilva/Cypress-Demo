import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, NgModel } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Livro } from '../../classes/livro.class';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from 'src/app/shared/snackbar/snackbar.component';
import { MatDialog } from '@angular/material/dialog';
import { LivrosServico } from '../livros.service';

@Component({
  selector: 'app-edit-books',
  templateUrl: './edit-books.component.html',
  styleUrls: ['./edit-books.component.css']
})
export class EditBooksComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    private _router:Router,
    private _snackBar: MatSnackBar,
    private _servico:LivrosServico,
    private _route:ActivatedRoute) { }

  private _livroId:number|null= null;
  public livroEditar= new Livro();
  public capaPadrao:string= "../../../assets/Books/Images/default-cover.jpg";
  public capaPreview:string= this.capaPadrao;

  public formEditar:FormGroup= new FormGroup({
    inputAutor: new FormControl(),
    inputCapa: new FormControl(),
    inputLancamento: new FormControl(),
    inputTitulo: new FormControl()
  })

  ngOnInit(): void {
    this._livroId= Number(this._route.snapshot.paramMap.get('id'));

      this._servico.buscarLivroPorId(this._livroId).subscribe({
        next: (resp)=> {
          this.livroEditar= resp;
          this._preencherForm(this.livroEditar);
        },
        error: err => console.log(err)
      });
  }

  private _preencherForm(livro:Livro){

    this.formEditar.controls['inputAutor'].setValue(livro.autor);
    this.formEditar.controls['inputCapa'].setValue(livro.capa);
    this.formEditar.controls['inputLancamento'].setValue(livro.lancamento);
    this.formEditar.controls['inputTitulo'].setValue(livro.titulo);
    this.capaPreview= livro.capa;
  }

    public editarLivro(form:FormGroup){

      if(!form.valid){
        this.openSnackBar();
        return
      }

      this.livroEditar.autor= form.value.autor;
      this.livroEditar.capa= form.value.capa;
      this.livroEditar.lancamento= form.value.lancamento;
      this.livroEditar.titulo= form.value.titulo;
      
      this._router.navigate(['/']);
    }

    public previewCapa(){

      let urlCapa= this.formEditar.controls['inputCapa'].value;

      if(urlCapa != '')
        this.capaPreview= urlCapa;
      else
        this.capaPreview= this.capaPadrao;
    }

    public openSnackBar() {
      this._snackBar.openFromComponent(SnackbarComponent, {
        duration: 3000,
        panelClass: 'snack-bar'
      });
    }

    public openSnackBarDelete() {
      this._snackBar.open("Book removed", "",{
        duration: 3000,
        panelClass: 'snack-bar'
      });
    }

    public apagarLivro(){

    }

  
}

