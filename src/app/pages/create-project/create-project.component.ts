import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss']
})
export class CreateProjectComponent implements OnInit {

  @Input() newProjectDescription: object;

  active: number = 1;
  
  moveTab(position: string) {
    if (position === "prev") {
      this.active--;
    } else if (position === "next") {
      this.active++;
    }
  }

  newProject: Project = {
    projectId : '',
    title : 'Prueba',
    ownerId : '',
    publishedDate : new Date(),
    deadlineDate : new Date(),
    techSet : [],
    filesArray : [],
    explanation : 'prueba prueba prueba',
    steate : {
      id : '',
      name : ''
    }
  };

  setNewProjectDescription(description: any){
    this.newProject.title = description.title;
    this.newProject.explanation = description.description;
    console.log("objeto global es "+this.newProject);
  }
  
  // Eliminar función tras comprobar que el objeto global funciona
  imprimirObjetoGlobal() {
    console.log("objeto proyecto es ", this.newProject);
  }

  constructor() { }

  ngOnInit() {
    
  }

}
