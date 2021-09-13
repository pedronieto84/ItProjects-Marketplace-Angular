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

  projects = [];


  //Injectamos el servicio user-projects
  constructor(public ApiService: ApiService) { }

  //luego por parámetro
  userId = "MfnmxHHRj9OSQggFqd5P";
  //uPF0Mn9C7RfU9w9pcpzK

  ngOnInit() {
    
    this.ApiService.getProjects(this.userId).subscribe( 
      (data: any[]) => {    
        this.projects = data;
      },
      err => {
        console.log("Error");
      }
    );

  }

        
}
