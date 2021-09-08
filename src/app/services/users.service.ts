import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor( private http: HttpClient ) { }

  getUser() {
    // Función con primer usuario de prueba
    return this.http.post(
      'https://us-central1-asamblea-27a8d.cloudfunctions.net/getUser', 
      {userId : 'WUnYiEbXKkLhG2FptA1p'});
  }
}
