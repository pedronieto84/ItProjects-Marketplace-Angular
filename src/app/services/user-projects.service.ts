import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class UserProjectsService {

  baseUrl = "https://us-central1-asamblea-27a8d.cloudfunctions.net/";
  userId = "MfnmxHHRj9OSQggFqd5P";

  constructor( private httpClient: HttpClient) { }

  /*httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  } */

  //getProjectsId(userId){}
  getProjectsId(): Observable <any> {
        
    return this.httpClient.get(this.baseUrl + 'getProjects?userId ='+ this.userId)

    /*
    this.httpClient.get(this.baseUrl + 'getProjects?userId ='+ this.userId).subscribe(
      data => { console.log(data);
    });
    */

  }

}
