import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../../../interfaces/interfaces';

import {  Router } from '@angular/router';
//services
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-project-line',
  templateUrl: './project-line.component.html',
  styleUrls: ['./project-line.component.scss']
})
export class ProjectLineComponent implements OnInit {

  constructor(private router : Router, public ApiService: ApiService) { }

  @Input() project: Project;



  ngOnInit(): void {
  }
  editProject(){
    console.log("update Proyecto", this.project.projectId);

  }
  deleteProject(){
    console.log(this.project.projectId)
      this.ApiService.deleteProject(this.project.projectId).subscribe( 
        (data: any[]) => {    
          alert("El projecto se ha eliminado");
          //actualizar página     
          //this.router.navigate(['/el-meu-compte']);
         

      },
      err => {
          console.log("Error");
      });
  }

}
