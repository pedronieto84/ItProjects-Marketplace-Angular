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
  // COMENTAR CON PEDRO: CREO QUE ESTA FUNCIÓN DEBERÍA INCLUIR EL USER ID 
  // COMO PARAMETRO OPCIONAL PARA DEVOLVER SÓLO PROYECTOS DE UN USUARIO
  
  getProjects(userId:string) {
    /********************** %20  PEDRO ¡EL ESPACIO! ***************/
    return this.http.get(this.baseUrl+'/getProjects?userId%20='+userId);  
    
  }

  //  Función getTechSet - Get techset array CONFIRMAR CON PEDRO SI 
  //  EL API ES CORRECTO, CREO QUE DEBERÍA PEDIR LA ID DE UN PROYECTO
  //  COMO EXPECTED DATA - ProjectId Qp0EWmAbibqa2jiRcWXJ
  getTechSet(projectId: string) {
    console.log('Se ha ejecutado la función: getTechSet');
    return this.http.get(this.baseUrl+'/getTechSet?projectId='+projectId);
  }

  // Función getUsers - Get all users 
  getUsers() {
    console.log('Se ha ejecutado la función: getUsers');
    return this.http.get(this.baseUrl+'/getUsers');
  }

  // Función getProject - Get that project, if userId is passed, returns only projects related to this user
  // COMENTAR CON PEDRO: CREO QUE ESTA FUNCIÓN NO DEBERÍA SOLICITAR EL ID DEL USUARIO
  // YA QUE CADA PROYECTO TIENE SU ID ÚNICA
  getProject(projectId: string) {
    console.log('Se ha ejecutado la función: getProject');
    return this.http.post( this.baseUrl+'/getProject', {"projectId": projectId});
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
    console.log('Se ha ejecutado la función: createUser');
    return this.http.post(this.baseUrl+'/createUser', {"user": user});
  }

  // Función updateProject
  updateProject(project: Project) {
    console.log('Se ha ejecutado la función: updateProject');
    return this.http.post(this.baseUrl+'/updateProject', {"project": project});
  }

  // Función updateUser
  updateUser(user: User) {
    console.log('Se ha ejecutado la función: updateUser');
    return this.http.post(this.baseUrl+'/updateUser', {"user": user});
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
