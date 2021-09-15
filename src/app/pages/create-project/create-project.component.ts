import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
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

  isTitleValid: boolean = false;
  isDescriptionValid: boolean = false;
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

  checkValidationFirstTab() {
    console.log("hola")
    if (this.newProject?.title != "" &&
        this.newProject?.title != undefined) {
      this.isTitleValid = true;
      console.log("isTItleValid= "+this.isTitleValid, 
                  "isDescriptionValid= "+this.isDescriptionValid,
                  "newProject.shortExplanation= ", this.newProject.shortExplanation)
    }
    if (this.newProject.shortExplanation != "" &&
          this.newProject?.shortExplanation != undefined) {
      this.isDescriptionValid = true;
      console.log("isDescValid")
    }
    if (this.isTitleValid && this.isDescriptionValid) {
      this.isValidFirstTab = true;
      console.log("isFirstTabValid")
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
    let dateShow = new Date(date);
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
