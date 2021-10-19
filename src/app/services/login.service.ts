import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { loginUser, User } from '../interfaces/interfaces';

import { BehaviorSubject } from 'rxjs';
import { ApiService } from './api.service';


@Injectable({
  providedIn: 'root',
})
export class LoginService {

  //creamos observable
  private newUserSource = new BehaviorSubject<Boolean>(false);
  //exponemos el observable
  currentUser$ = this.newUserSource.asObservable();
  
  constructor(  private http:HttpClient,
                public apiService: ApiService) { }  


  /*Servicio de login*/
  onLogin( user: loginUser ):Promise<any> {
    return this.http.post<User>(this.apiService.baseUrl + '/login', user).toPromise()
  }

  /*Servicio de logout*/
  onLogout() {
    //borramos información del localstorage
    localStorage.removeItem('usuario');
    //enviamos el observable
    this.newUserSource.next(false);
  }

}
