import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { loginUser, User } from '../interfaces/interfaces';

import { BehaviorSubject, Observable } from 'rxjs';
import { ApiService } from './api.service';


@Injectable({
  providedIn: 'root',
})
export class LoginService {

  //creamos observable y le pasamos un valor para inicializarlo (null)
  private newUserSource = new BehaviorSubject< User | null >(null);

  //exponemos el observable
  public currentUser$: Observable<User | null> = this.newUserSource.asObservable();

  
  constructor(  private http:HttpClient,
                public apiService: ApiService) { }  


 

  onLogin( user: loginUser ):Promise<any> {
    return this.http.post<User>(this.apiService.baseUrl + '/login', user).toPromise()

  }

  
  /*Servicio de logout*/
  onLogout() {
    //borramos información del localstorage
    localStorage.removeItem('usuario');
    //enviamos el observable y lo ponemos a null
    this.newUserSource.next(null);
  }

  updateUser(user: User){
    //enviamos el observable con el nuevo valor de user
    this.newUserSource.next(user)
  }

}
