import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HomeComponent } from '../home/home.component';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Cliente } from 'src/app/classes/cliente';
import { ClienteService } from '../cliente.service';
import { NovoEmprestimo } from 'src/app/classes/novoEmprestimo';
import { SnackbarService } from '../snackbar.service';
import { EmprestimoService } from '../emprestimo.service';

@Component({
  selector: 'loan-modal',
  templateUrl: './loan-modal.component.html',
  styleUrls: ['./loan-modal.component.css']
})
export class LoanModalComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<HomeComponent>,
    private snackBar:SnackbarService,
    private _srvEmprestimo:EmprestimoService,
    private _servicoCliente:ClienteService ) { }

  ngOnInit(): void {
    console.clear();

    console.log(this.data);

    this._servicoCliente.BuscarTodosClientes().subscribe({
      next: data => this.listaClientes= data,
      error: err=> console.log(err)
    })
  }

  public listaClientes:Cliente[]= [];
  public cliente:Cliente= new Cliente();

  public loanForm:FormGroup= new FormGroup({
    inputId: new FormControl(),
    inputTelefone: new FormControl(),
    inputEndereco: new FormControl(),
    inputEntrega: new FormControl()
  })

  public fecharModal(){
      this.dialogRef.close();
  }

  public clienteSelecionado(cliente:any) {
    this.cliente= cliente;
    this.loanForm.controls['inputTelefone'].setValue(cliente.telefone);
    this.loanForm.controls['inputEndereco'].setValue(cliente.endereco);
  }

  public salvarEmprestimo(form:FormGroup){
    if(!form.valid){
      this.snackBar.abrir("Informe todos os campos");
      return;
    }
    let emprestimo:NovoEmprestimo= new NovoEmprestimo();

    emprestimo.clienteId= this.loanForm.controls['inputId'].value;
    emprestimo.livroId= this.data.livroId;
    emprestimo.dataRetirada= new Date();
    emprestimo.dataDevolucao= form.controls['inputEntrega'].value;

    this._srvEmprestimo.postEmpresimo(emprestimo).subscribe({
      next: ()=> this.fecharModal(),
      error: err => this.snackBar.abrir(err)
    })
  }
}
