/* Angular Imports */
import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { Observable } from 'rxjs';

/* App Imports */
import { Project } from 'src/app/interfaces/interfaces';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-admin-table',
  templateUrl: './admin-table.component.html',
  styleUrls: ['./admin-table.component.scss']
})
export class AdminTableComponent implements OnInit {

  /* PROPERTIES */
  projects: Project[] = []; //Will save array of Projects

  

  constructor( public apiService: ApiService) {
    this.getProjects();
  }

  ngOnInit(): void {
     
  }

  /* METHODS */
  //Subscribes to the ApiService's observable and gets all projects
  getProjects() {
    this.apiService.getAllProjects()
      .subscribe(projects => this.projects = projects); // console.log(projects)
  }
}

