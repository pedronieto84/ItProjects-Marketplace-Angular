import { Component, OnInit } from '@angular/core';

//servicios
import { ApiService } from 'src/app/services/api.service';
import { User } from '../../interfaces/interfaces';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent implements OnInit {

  
  projects = [];
  currentUser: any;

  //pestañas activas
  active = 1;

  constructor(public ApiService: ApiService) { }

  ngOnInit() {   
 
    
    let datoObjeto = JSON.parse(localStorage.getItem('usuario')); 

    // USUARIO datos
    this.ApiService.getUser(datoObjeto.userId).subscribe( data => {
      this.currentUser = data;
      console.log("CURRENT USER", this.currentUser );
    },    
    err => {
      console.log("Error");
    });
      
    

    // PROYECTOS de un usuario
    this.ApiService.getProjects(datoObjeto.userId).subscribe( 
      (data: any[]) => {    
        this.projects = data;
        //console.log("projects ",this.projects);
      },
      err => {
        console.log("Error");
      }
    );

    
    

  }

  modifyUser() {
    //envio los datos del formulario modificado
    // this.ApiService.updateUser(user: User) {

   }

}
