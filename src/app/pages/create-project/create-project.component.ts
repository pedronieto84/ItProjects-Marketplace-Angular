import { Component, Input, OnInit, Output } from '@angular/core';
import { Project } from 'src/app/interfaces/interfaces';
import { Subscription } from 'rxjs';
import { NewProjectService } from '../../services/new-project.service';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss']
})
export class CreateProjectComponent implements OnInit {

  @Input() newProjectDescription: object;
  @Input() newProjectDate: Date;
  @Input() sendTechSet: string[];

  newProject: any;
  subscription: Subscription;

  active: number = 1;
  
  moveTab(position: string) {
    if (position === "prev") {
      this.active--;
    } else if (position === "next") {
      this.active++;
    }
  }
  
  setNewTechSet(techList: string[]){
    this.newProject.techSet = techList;
  }

  changeProjectProperty(property: string, newValue: any) {
    this.data.changeProjectProperty(property, newValue);
  }

  constructor(private data: NewProjectService) { }

  ngOnInit() {
    this.subscription = this.data.currentProject$.subscribe(newProject => this.newProject = newProject);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
