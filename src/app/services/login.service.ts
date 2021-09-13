import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { loginUser, User } from '../interfaces/interfaces';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root',
})
export class LoginService {

  constructor( private http:HttpClient) { }

  currentUser: User;

  /*Servicio de login*/
  onLogin( user: loginUser ):Promise<any> {
    return this.http.post<User>(environment.baseUrlLogin, user).toPromise()
  }

}
