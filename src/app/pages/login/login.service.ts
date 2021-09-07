import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  constructor() { }

  onLogin(email: string) {
      console.log("service " + email );
  }

}