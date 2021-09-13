import { Component, OnInit, Output, EventEmitter  } from '@angular/core';

//servicios
import { ApiService } from 'src/app/services/api.service';
//import { UserProjectsService } from 'src/app/services/user-projects.service';

//interface
import { Project } from '../../interfaces/interfaces';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

   projects: Project [];


  //Injectamos el servicio user-projects
  constructor(public ApiService: ApiService) { }

  //luego por parámetro
  userId = "MfnmxHHRj9OSQggFqd5P";

  ngOnInit() {
    
    this.ApiService.getProjects(this.userId).subscribe( 
      data => { 
        console.log(JSON.stringify(data));
        //this.projects = data;
      },
      err => {
        console.log("Error");
      }
    );

  }

        
}
