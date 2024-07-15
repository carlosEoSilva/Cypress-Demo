import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, NgModel } from '@angular/forms';
import { LivrosServico } from '../livros.service';
import { Livro } from '../../classes/livro.class';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SnackbarComponent } from 'src/app/shared/snackbar/snackbar.component';
import { NovoLivro } from 'src/app/classes/novoLivro';

@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.css']
})
export class AddBooksComponent implements OnInit {

  constructor(
    private _servico:LivrosServico, 
    private _snackBar: MatSnackBar,
    private _router:Router) { }

    defaultCover:string= "../../../assets/Books/Images/default-cover.jpg";
    coverPreview:string= this.defaultCover;

  ngOnInit(): void { 
  }

  public livroForm:FormGroup= new FormGroup({
    inputAutor:new FormControl(),
    inputCapa: new FormControl(),
    inputLancamento: new FormControl(),
    inputTitulo: new FormControl()
  })

  preview(){
    let cover= this.livroForm.controls['inputCapa'].value;

    if(cover != '')
      this.coverPreview= cover;
    else
      this.coverPreview= this.defaultCover;
  }

  public salvarLivro(form:FormGroup){
    
    if(!form.valid){
      this.openSnackBar();
      return
    }

    let novoLivro= new NovoLivro(
      form.value.inputTitulo,
      form.value.inputAutor,
      form.value.inputCapa,
      form.value.inputLancamento,
      'D'
    );

    this._servico.novoLivro(novoLivro).subscribe({
      next: (data)=>{
        if(data){
          this.openSnackBarSave();
          this._limparForm();

        }
        else
          this.openSnackBar()
      },
      error: err => console.log(err)
    })
    
    // this._router.navigate(['/']);
    // this.openSnackBarSave();
  }

  private _limparForm(){
    this.livroForm.controls['inputTitulo'].setValue('');
    this.livroForm.controls['inputAutor'].setValue('');
    this.livroForm.controls['inputCapa'].setValue('');
    this.livroForm.controls['inputLancamento'].setValue('');
    this.coverPreview= this.defaultCover;
  }

  openSnackBar() {
    this._snackBar.openFromComponent(SnackbarComponent, {
      duration: 3000,
      panelClass: 'snack-bar'
    });
  }

  openSnackBarSave() {
    this._snackBar.open("Cadastro efetuado", "", {
      duration: 3000,
      panelClass: 'snack-bar'
    });
  }

}
