import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Livro } from '../../classes/livro.class';
import { switchMap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from 'src/app/shared/snackbar/snackbar.component';
import { MatDialog } from '@angular/material/dialog';

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
    private _route:ActivatedRoute) { }

  public livroEditar= new Livro();
  public capaPadrao:string= "../../../assets/Books/Images/default-cover.jpg";
  public capaPreview:string= this.capaPadrao;

  ngOnInit(): void {
  //   let fetchFormData$= this._route.paramMap.pipe(
  //     switchMap((param)=>{
  //       var id= Number(param.get('id'));
  //       return this._store.pipe(select(selectBookById(id)));
  //     })
  //   );

  //   fetchFormData$.subscribe((data)=>{
  //     if(data){
  //       this.livroEditar= {...data};
  //       this.capaPreview= data.capa;
  //     }
  //     else{
  //       this._router.navigate(['/']);
  //     }
  //   })
  }

  // public editarLivro(form:NgForm){

  //   if(!form.valid){
  //     this.openSnackBar();
  //     return
  //   }

  //   this.livroEditar.autor= form.value.autor;
  //   this.livroEditar.capa= form.value.capa;
  //   this.livroEditar.lancamento= form.value.lancamento;
  //   this.livroEditar.titulo= form.value.titulo;

  //   console.log('A-'); console.log(this.livroEditar);

  //   this._store.dispatch(editarLivroApi({ livroEditado: this.livroEditar }));

  //   this._router.navigate(['/']);
  // }

  // public preview(cover:NgModel){
  //   console.log(cover.value);

  //   if(cover.value != '')
  //     this.capaPreview= cover.value;
  //   else
  //     this.capaPreview= this.capaPadrao;
  // }

  // public openSnackBar() {
  //   this._snackBar.openFromComponent(SnackbarComponent, {
  //     duration: 3000,
  //     panelClass: 'snack-bar'
  //   });
  // }

  // public openSnackBarDelete() {
  //   this._snackBar.open("Book removed", "",{
  //     duration: 3000,
  //     panelClass: 'snack-bar'
  //   });
  // }

  // public apagarLivro(){
  //   this._store.dispatch(apagarLivroApi({ id: this.livroEditar.id}));
  // }

  
}

