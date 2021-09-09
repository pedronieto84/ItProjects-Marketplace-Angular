import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { NewProjectService } from '../../../services/new-project.service';

@Component({
  selector: 'app-project-description',
  templateUrl: './project-description.component.html',
  styleUrls: ['./project-description.component.scss']
})
export class ProjectDescriptionComponent implements OnInit {

  newProject:any;
  subscription: Subscription;

  constructor(private data: NewProjectService) { }

  ngOnInit(): void {
    this.subscription = this.data.currentProject$.subscribe(newProject => this.newProject = newProject);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  changeProjectProperty(property: string, newValue: any) {
    this.data.changeProjectProperty(property, newValue);
  }

}
