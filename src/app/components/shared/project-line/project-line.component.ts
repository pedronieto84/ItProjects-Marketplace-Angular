import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../../../interfaces/interfaces';

import {  Router } from '@angular/router';
//services
import { ApiService } from 'src/app/services/api.service';
//form
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-project-line',
  templateUrl: './project-line.component.html',
  styleUrls: ['./project-line.component.scss']
})
export class ProjectLineComponent implements OnInit {

  constructor(private router : Router, public ApiService: ApiService, private fb:FormBuilder) { }

  @Input() project: Project;

  //campos de formulario
  updateProjectForm: FormGroup = this.fb.group({
    title         : ['', [Validators.required, Validators.minLength(1)]],
    publishedDate : ['', [Validators.minLength(1)]],
    deadlineDate : ['', [Validators.minLength(1)]],
    bid : ['', [Validators.minLength(1)]],
    state : ['', [Validators.minLength(1)]],
  })

  ngOnInit(): void {
  }
  editProject(){
    this.ApiService.updateProject(this.project).subscribe(
      (data: any[]) => {    
        alert("El projecto se ha actualizado");     
      },
      err => {
        console.log("Error");
      });

  }
  deleteProject(){
    console.log(this.project.projectId)
      this.ApiService.deleteProject(this.project.projectId).subscribe( 
        (data: any[]) => {    
          alert("El projecto se ha eliminado");
          //actualizar página ?? o eliminar fila actual con viewChild??
          
      },
      err => {
          console.log("Error");
      });
  }

}
