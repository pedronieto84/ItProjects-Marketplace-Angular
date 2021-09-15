import { Component, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import { NewProjectService } from '../../services/new-project.service';
import { ApiService } from 'src/app/services/api.service';
import { Project } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss']
})
export class CreateProjectComponent implements OnInit {
  
  newProject: Project;

  subscription: Subscription;
  
  activeTab: number = 1;

  showPublishedDate: any;
  showDeadLine: any;
  
  isTitleValid: boolean = false;
  isDescriptionValid: boolean = false;
  isValidFirstTab: boolean = false;

  isBidValid: boolean = false;
  isTechSetValid: boolean = false;
  isValidSecondTab: boolean = false;

  isDragDrop: boolean = false;
  
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
    }
    if (this.newProject.shortExplanation != "" &&
      this.newProject?.shortExplanation != undefined) {
      this.isDescriptionValid = true;
    }
    if (this.isTitleValid && this.isDescriptionValid) {
      this.isValidFirstTab = true;
    }
  }

  checkValidationSecondTab() {
    console.log("checkvalidation second tab");
    if(this.showPublishedDate &&
      this.showDeadLine &&
      this.isBidValid &&
      this.isTechSetValid) {
      this.isValidSecondTab = true;
    } else {
      this.isValidSecondTab = false;
    }
     
  }

  checkBid() {
    if(this.newProject.bid > 0) {
      this.isBidValid = true;
    } else {
      this.isBidValid = false;
    }
  }

  checkTechSet() {
    console.log("prueba checktechset")
    if (this.newProject.techSet.length > 0) {
      this.isTechSetValid = true;
      console.log("files array "+this.newProject.filesArray);
    } else {
      this.isTechSetValid = false;
      console.log(this.newProject.filesArray);
    }
  }

  checkDragDrop() {

  }
  
  changeProjectProperty(property: string, newValue: any) {
    this.data.changeProjectProperty(property, newValue);
  }

  sendDate(dateType: string, date: any) {
    // Guarda la fecha en formato NgbDate para 
    // enviarlo al componente datePicker y lo muestre

    /*
       COMO SELECCIONAR LA VARIABLE DE DATETOSHOW
       dateToShow = date;
    */
    if(dateType == "publishedDate") {
      this.showPublishedDate = date;
    } else if (dateType == "deadLine") {
      this.showDeadLine = date;
    }
    // Convertir NgbDate a Date 
    date = new Date(date.year, date.month - 1, date.day);
    // Convertir a milisegundos
    let dateMs = date.getTime();
    console.log("sendDate in milliseconds! ",dateMs);
    // Cambiar la fecha en el Proyecto según si es published o Deadline
    this.changeProjectProperty(dateType, dateMs);
  }

  dateMsToDate(dateInMs: number, dateToShow: Date) {
    dateToShow = new Date(dateInMs);
    console.log(dateInMs+" in Date is", dateToShow);
  }

  createProject() {
    this.dataApiService.createProject(this.newProject);
  }

  constructor(private data: NewProjectService,
              private dataApiService: ApiService
              ) { }

  ngOnInit() {
    this.subscription = this.data.currentProject$.subscribe(newProject => this.newProject  = newProject as any);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
