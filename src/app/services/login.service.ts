import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { loginUser, User } from '../interfaces/interfaces';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class LoginService {

  constructor( private http:HttpClient) { }

  currentUser: User;

  /*Servicio de login
  onLogin( user: loginUser ) {
    try {
      return this.http.post<User>(environment.baseUrlLogin, user).subscribe((res:User)=>{
        const currentUser = res;
        console.log( currentUser);
        // Guardo el objeto como un string en el navegador
        localStorage.setItem('usuario', JSON.stringify(currentUser));
      });
    } catch (error) {
      return console.log("test",error);
    }
        
  }*/

  /*Servicio de login*/
  onLogin( user: loginUser ):Promise<any> {
    return this.http.post<User>(environment.baseUrlLogin, user).toPromise()
  }
}

/*
search(term:string) {
  let promise = new Promise((resolve, reject) => {
    let apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20`;
    this.http.get(apiURL)
      .toPromise()
      .then(
        res => { // Success
        this.results = res.json().results;
        resolve();
        },
        msg => { // Error
        reject(msg);
        }
      );
  });
  return promise;
}
}*/