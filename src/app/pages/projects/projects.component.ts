import { Component, OnInit } from '@angular/core';

//servicios
import { UserProjectsService } from 'src/app/services/user-projects.service';

//interface
import { Project } from '../../interfaces/interfaces';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

   projects: [Project];
   //projects: any;

  //Injectamos el servicio user-projects
  constructor(public UserProjectsService: UserProjectsService) { }

  ngOnInit() {

  let usrProjectsId: [string];

    this.UserProjectsService.getProjectsId().subscribe( 
      data => { 
        //console.log(data);
        this.projects = data;
        
        //almaceno todos los id de proyecto de ese usuario
        /*this.projects.forEach(function (value){
            console.log("id de proyecto: " + value.projectId);
          usrProjectsId.push(value.projectId);
        })*/



      },
      err => {
        console.log("Error");
      }
    );


      
    

    

  }

        
}
