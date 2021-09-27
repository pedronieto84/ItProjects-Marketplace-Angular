import { Component, OnInit } from '@angular/core';

//servicios
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent implements OnInit {

  
  projects = [];
  usr = [];

  //pestañas activas
  active = 1;

  constructor(public ApiService: ApiService) { }

  ngOnInit() {
    
    let dato = localStorage.getItem('usuario');
 
    //viene como string convierto a objeto
    let datoObjeto = JSON.parse(dato);

    // USUARIO datos
    this.ApiService.getUser(datoObjeto.userId).subscribe( 

      (data: any[]) => {    
        this.usr = data;
      },
      err => {
        console.log("Error");
      }
    );

    // PROYECTOS de un usuario
    this.ApiService.getProjects(datoObjeto.userId).subscribe( 

      (data: any[]) => {    
        this.projects = data;
      },
      err => {
        console.log("Error");
      }
    );

  }

}
