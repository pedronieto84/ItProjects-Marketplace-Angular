import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-project-description',
  templateUrl: './project-description.component.html',
  styleUrls: ['./project-description.component.scss']
})
export class ProjectDescriptionComponent implements OnInit {

  @Output() sendProjectDescription = new EventEmitter<object>();

  addProjectDescription(newProjectDescription: object) {
    this.sendProjectDescription.emit(newProjectDescription);
    console.log(newProjectDescription);
  }

  newProjectDescription = {
    title: '',
    description: ''
  }

  titlePlaceholder = "Title"

  constructor() { }

  ngOnInit(): void {
  }

}
