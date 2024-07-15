import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HomeComponent } from '../home/home.component';
import { MatDialogRef } from '@angular/material/dialog';
import { Cliente } from 'src/app/classes/cliente';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'loan-modal',
  templateUrl: './loan-modal.component.html',
  styleUrls: ['./loan-modal.component.css']
})
export class LoanModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<HomeComponent>,
    private _servicoCliente:ClienteService ) { }

  ngOnInit(): void {
    console.clear();

    this._servicoCliente.BuscarTodosClientes().subscribe({
      next: data => this.listaClientes= data,
      error: err=> console.log(err)
    })
  }

  public listaClientes:Cliente[]= [];

  public loanForm:FormGroup= new FormGroup({
    inputNome: new FormControl(),
    inputTelefone: new FormControl(),
    inputEndereco: new FormControl(),
    inputTitulo: new FormControl(),
    inputEntrega: new FormControl()
  })

  public fecharModal(){
      this.dialogRef.close();
    
  }

  clienteSelecionado(cliente:any) {
    console.log(cliente);

    this.loanForm.controls['inputTelefone'].setValue(cliente.telefone);
    this.loanForm.controls['inputEndereco'].setValue(cliente.endereco);
    this.loanForm.controls['input']
  
  }

}
