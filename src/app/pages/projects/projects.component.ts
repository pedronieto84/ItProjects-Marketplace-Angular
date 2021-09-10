import { Component, OnInit, Output, EventEmitter  } from '@angular/core';

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

   projects: Project [];


  //Injectamos el servicio user-projects
  constructor(public UserProjectsService: UserProjectsService) { }
  
  ngOnInit() {
    
    this.UserProjectsService.getProjectsId().subscribe( 
      data => { 
        //console.log(data);
        this.projects = data;
      },
      err => {
        console.log("Error");
      }
    );

  }

        
}
