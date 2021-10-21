import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

 currentUser$: Observable<User | any>;
  
  constructor(  private loginServ: LoginService, private router: Router ) { }

  ngOnInit(): void {
    this.currentUser$ = this.loginServ.currentUser$;  
  }

  logout(){
    console.log('logout');

    this.loginServ.onLogout()

    this.router.navigateByUrl('login')
    
  }
  
}
