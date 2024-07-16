import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//-Project
import { LivrosRoutingModule } from './livros-routing.module';
import { HomeComponent } from './home/home.component';
import { AddBooksComponent } from './add-books/add-books.component';
import { EditBooksComponent } from './edit-books/edit-books.component';
import { LoanModalComponent } from './loan-modal/loan-modal.component';

//-Angular material
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { LoginComponent } from './login/login.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { ListaEmprestimosComponent } from './lista-emprestimos/lista-emprestimos.component';


@NgModule({
  declarations: [
    HomeComponent,
    AddBooksComponent,
    EditBooksComponent,
    LoginComponent,
    LoanModalComponent,
    PaginaInicialComponent,
    ListaEmprestimosComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LivrosRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatButtonModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule
  ],
  providers:[
    MatDatepickerModule,
    {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'}
  ]
})
export class LivrosModule { }
