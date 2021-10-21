/* Angular Imports */
import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import {DecimalPipe} from '@angular/common';

import { Observable } from 'rxjs';

/* App Imports */
import { Project } from 'src/app/interfaces/interfaces';
import { ApiService } from 'src/app/services/api.service';
import { SortProjectsService } from 'src/app/services/sort-projects.service';
import { SortableDirective, SortEvent } from 'src/app/directives/sortable.directive';

@Component({
  selector: 'app-admin-table',
  templateUrl: './admin-table.component.html',
  styleUrls: ['./admin-table.component.scss'],
  // providers: [SortProjectsService, DecimalPipe]
})
export class AdminTableComponent {

  /* PROPERTIES */
  // projects$: Observable<Project[]>;
  // total$: Observable<number>;
  projects: Project[] = []; //Will save array of Projects

  //Properties for searching and pagination
  searchTerm: string;
  page = 1;
  pageSize = 4;
  collectionSize: number;
  currentRate = 8;
  allProjects: Project[];
  

  // @ViewChildren(SortableDirective) headers: QueryList<SortableDirective>; 

  constructor( 
    public apiService: ApiService,
    ) { //public sortProjectsService: SortProjectsService
    this.getProjects();

    // this.projects$ = sortProjectsService.projects$;
    // this.total$ = sortProjectsService.total$;
  }  

  /* METHODS */
  //Subscribes to the ApiService's observable and gets all projects
  getProjects() {
    this.apiService.getAllProjects()
      .subscribe((projects) => {        
        this.collectionSize = projects.length; //Determinem el total de projectes
        this.projects = projects;
        this.allProjects = this.projects;
      }); // console.log(projects)
  }

  search(value: string): void {
    this.projects = this.allProjects.filter(val => val.title.toLowerCase().includes(value));
    this.collectionSize = this.projects.length;
  }


  /*onSort({column, direction}: SortEvent) {
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });  

    
    this.sortProjectsService.sortColumn = column;
    this.sortProjectsService.sortDirection = direction;
  }*/
}

