import { Component, Input, OnInit } from '@angular/core';
import { Project } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss']
})
export class CreateProjectComponent implements OnInit {

  @Input() newProjectDescription: object;
  @Input() newProjectDate: Date;
  @Input() sendTechSet: string[];

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

  projectBid: number;

  setNewProjectDescription(description: any){
    this.newProject.title = description.title;
    this.newProject.explanation = description.description;
    console.log("objeto global es "+this.newProject);
  }

  setNewProjectPublishedDate(sendProjectDate: Date, ) {
    this.newProject.publishedDate = sendProjectDate;
    console.log("set date");
  }

  setNewProjectDeadlineDate(sendProjectDate: Date, ) {
    this.newProject.deadlineDate = sendProjectDate;
  }
  
  setNewTechSet(techList: string[]){
    this.newProject.techSet = techList;
    console.log("techList = ", techList);
    console.log("Techset = ", this.newProject.techSet);
  }

  // Eliminar función tras comprobar que el objeto global funciona
  imprimirObjetoGlobal() {
    console.log("objeto proyecto es ", this.newProject);
  }

  constructor() { }

  ngOnInit() {
    
  }

}
