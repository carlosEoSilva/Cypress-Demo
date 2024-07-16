import { Component } from '@angular/core';
import { AdminService } from './books/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    public srvAdmin:AdminService,
    private _router:Router){}
  title = 'Biblioteca';

  public logOut():void{
    this.srvAdmin.AdminLogout();
    this._router.navigateByUrl("inicio");
  }
}

