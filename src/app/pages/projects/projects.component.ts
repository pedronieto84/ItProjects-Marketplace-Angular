import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      //se me pasa el id del usuario
      //let userId = ?? .get('')
      
      //obtengo el array de los proyectos de ese usuario ( project[] )
      //getProjects()      
      //https://us-central1-asamblea-27a8d.cloudfunctions.net/getProjects?userId=cLAYAmIqsob2Ekqos7L
  
      //recorro array y obtengo los id del proyecto, uno a uno y envío a project-card-component y voy mostrando
    }

}
