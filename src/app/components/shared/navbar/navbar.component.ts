import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { User } from 'src/app/interfaces/interfaces';
import { LoginService } from 'src/app/services/login.service';
import { ApiService } from '../../../services/api.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: []
})
export class NavbarComponent implements OnInit {

  userObservable$: Observable<User | any>;

  
  constructor(  private loginServ: LoginService) {

    this.userObservable$ = this.loginServ.currentUser$;
   }

  currentUser: any;

  

  ngOnInit(): void {
    this.currentUser = JSON.parse(localStorage.getItem('usuario')); 
    console.log('usr id',  this.currentUser.userId);
    

   /* this.ApiService.getUser(usr).subscribe( resp => {
      this.currentUser = resp;
      console.log( ' this.currentUser',this.currentUser );
    });*/
 }

 
}
