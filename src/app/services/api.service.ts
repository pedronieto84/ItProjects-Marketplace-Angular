import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project, User } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http: HttpClient ) { }

  baseUrl: string = 'https://us-central1-asamblea-27a8d.cloudfunctions.net';

  // Función getProjects - Get all projects

  getProjects(userId:string) {
    /********************** %20  PEDRO ¡EL ESPACIO! ***************/
    console.log(userId); 
    return this.http.get(this.baseUrl+'/getProjects?userId='+userId); 
    
    
  }

  //  Función getTechSet - Get techset array
  getTechSet() {
    console.log('Se ha ejecutado la función: getTechSet');
    return this.http.get(this.baseUrl+'/getTechSet');
  }

  // Función getUsers - Get all users 
  getUsers() {
    console.log('Se ha ejecutado la función: getUsers');
    return this.http.get(this.baseUrl+'/getUsers');
  }

  // Función getProject - Get that project, if userId is passed, returns only projects related to this user
  getProject(projectId: string, userId: string) {
    console.log('Se ha ejecutado la función: getProject');
    return this.http.post( this.baseUrl+'/getProject', {"projectId": projectId, "userId": userId});
  }

  // Función getUser
  getUser(userId:string) {
    console.log('Se ha ejecutado la función: getUser', this.baseUrl, {userId : userId});
    return this.http.post( this.baseUrl+'/getUser', {"userId": userId});
  }

  /*
  
    ESTAS FUNCIONES NO LAS HE COMPROBADO
  
  */

  // Función createProject
  createProject(project: Project) {
    console.log('Se ha ejecutado la función: createProject');
    return this.http.post( this.baseUrl+'/createProject', {"project": project});
  }

  // Función createUser
  createUser(user: User) {
    console.log('Se ha ejecutado la función: createUser', user);
    return this.http.post(this.baseUrl+'/createUser', user);
    
    debugger
  }

  // Función updateProject
  updateProject(project: Project) {
    console.log('Se ha ejecutado la función: updateProject');
    return this.http.post(this.baseUrl+'/updateProject', {"project": project});
  }

  // Función updateUser
  updateUser(user: User) {
    console.log('Se ha ejecutado la función: updateUser');
    return this.http.post(this.baseUrl+'/updateUser', user);
  }

  // Función deleteProject
  deleteProject(projectId:string) {
    console.log('Se ha ejecutado la función: deleteProject');
    return this.http.post(this.baseUrl+'/deleteProject', {"projectId": projectId});
  }

  // Función deleteUser
  deleteUser(userId: string) {
    console.log('Se ha ejecutado la función: deleteUser');
    return this.http.post(this.baseUrl+'/deleteUser', {"userId": userId});
  }

  // Función login
  login(email: string, password: string) {
    console.log('Se ha ejecutado la función: login');
    return this.http.post(this.baseUrl+'/login', {"email": email, "password": password});
  }
  // Función uploadDocument
}
