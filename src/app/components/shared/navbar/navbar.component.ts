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
  
  constructor(  private loginServ: LoginService) { }

  ngOnInit(): void {
    this.userObservable$ = this.loginServ.currentUser$;  
  }
  
}
