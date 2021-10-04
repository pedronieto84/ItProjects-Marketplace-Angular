import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { loginUser, User } from '../interfaces/interfaces';

import { BehaviorSubject, Observable } from 'rxjs';
import { ApiService } from './api.service';


@Injectable({
  providedIn: 'root',
})
export class LoginService {

  //creamos observable
  private newUserSource = new BehaviorSubject< User | null >(null);

  //exponemos el observable
  currentUser$: Observable<User | null> = this.newUserSource.asObservable();
  
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
    this.newUserSource.next(null);
  }

  updateUser(user: User){
    this.newUserSource.next(user)
  }

}
