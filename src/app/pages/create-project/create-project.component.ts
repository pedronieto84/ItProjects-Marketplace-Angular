import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss']
})
export class CreateProjectComponent implements OnInit {

  active: number = 1;
  
  moveTab(position: string) {
    if (position === "prev") {
      this.active--;
    } else if (position === "next") {
      this.active++;
    }
  }

  newProject: Project;

  constructor() { }

  ngOnInit() {
    
  }

}
