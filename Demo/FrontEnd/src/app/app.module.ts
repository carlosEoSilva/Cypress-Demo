import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { SnackbarComponent } from './shared/snackbar/snackbar.component';
import { DialogComponent } from './shared/dialog/dialog.component';
import { HttpClientModule } from '@angular/common/http';
import { LivrosModule } from './books/livros.module';
import { FormGroup, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SnackbarComponent,
    DialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LivrosModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
