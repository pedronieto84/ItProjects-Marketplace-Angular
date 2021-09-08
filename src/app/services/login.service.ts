import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { loginUser, User } from '../interfaces/interfaces';
import { environment } from '../../environments/environment';
import { Observable,  } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  constructor( private http:HttpClient) { }


  //Servicio de login
  onLogin( user: loginUser ) {
      return this.http.post<User>(environment.baseUrlLogin, user).subscribe((res)=>{
        const currentUser = res;
        console.log( currentUser);
        // Guardo el objeto como un string
        localStorage.setItem('usuario', JSON.stringify(currentUser));
      });
  }



}