import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private _snackBar: MatSnackBar) { }

  public abrir(mensagem:string) {
    this._snackBar.open(mensagem, "",{
      duration: 3000,
      panelClass: 'snack-bar'
    });
  }
}
