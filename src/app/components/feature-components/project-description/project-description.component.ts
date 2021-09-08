import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NewProjectService } from '../../../services/new-project.service';

@Component({
  selector: 'app-project-description',
  templateUrl: './project-description.component.html',
  styleUrls: ['./project-description.component.scss']
})
export class ProjectDescriptionComponent implements OnInit {

  /*
  @Output() sendProjectDescription = new EventEmitter<object>();

  addProjectDescription(newProjectDescription: object) {
    this.sendProjectDescription.emit(newProjectDescription);
    console.log(newProjectDescription);
  }
  */

  newProject:any;

  constructor(private data: NewProjectService) { }

  ngOnInit(): void {
    this.data.currentProject$.subscribe(newProject => this.newProject = newProject);
  }

  ngOnDestroy(): void {
    this.newProject.unsubscribe();
  }

  changeProjectProperty(property, newValue) {
    this.data.changeProjectProperty(property, newValue);
  }

}
