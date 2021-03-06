import { Component, OnInit  } from '@angular/core';

//servicios
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects = [];


  //Injectamos el servicio user-projects
  constructor(public ApiService: ApiService) { }


  ngOnInit() {
    
    let dato = localStorage.getItem('usuario');
 
    //viene como string convierto a objeto
    let datoObjeto = JSON.parse(dato);

    //carga proyectos de un usuario

    if(datoObjeto){
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

        
}
