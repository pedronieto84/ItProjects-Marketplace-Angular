import { Component, Input, OnInit, Output } from '@angular/core';
import { Project } from 'src/app/interfaces/interfaces';
import { Subscription } from 'rxjs';
import { NewProjectService } from '../../services/new-project.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss']
})
export class CreateProjectComponent implements OnInit {

  isValidFirstTab: boolean = false;

  newProject: any;
  subscription: Subscription;

  activeTab: number = 1;
  
  moveTab(position: string) {
    if (position === "prev") {
      this.activeTab--;
      console.log(this.activeTab);
    } else if (position === "next") {
      this.activeTab++;
      console.log(this.activeTab);
    }
  }

  checkValidationFirstTab(e: boolean) {
    if (e == true) {
      this.isValidFirstTab = true;
    } else {
      this.isValidFirstTab = false;
    }
  }
  
  changeProjectProperty(property: string, newValue: any) {
    this.data.changeProjectProperty(property, newValue);
  }

  sendDate(dateType: string, date: any) {
    date = new Date(date.year, date.month - 1, date.day);
    let dateMs = date.getTime();
    console.log(dateMs);
    this.changeProjectProperty(dateType, dateMs)
  }

  dateMsToDate(date: number) {
    
  }

  createProject() {
    this.dataApiService.createProject(this.newProject);
  }

  constructor(private data: NewProjectService,
              private dataApiService: ApiService
              ) { }

  ngOnInit() {
    this.subscription = this.data.currentProject$.subscribe(newProject => this.newProject = newProject);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
