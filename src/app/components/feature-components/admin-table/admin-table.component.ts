/* Angular Imports */
import {AfterViewInit, Component, ViewChild} from '@angular/core';

/* Angular Material Imports */
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

/* App Imports */
import { Project } from 'src/app/interfaces/interfaces';
import { ApiService } from 'src/app/services/api.service';

//UserData: mockup interface para probar la tabla
/* export interface UserData {
  id: string;
  name: string;
  progress: string;
  fruit: string;
} */

/** Constants used to fill up our data base. */
/*const FRUITS: string[] = [
  'blueberry', 'lychee', 'kiwi', 'mango', 'peach', 'lime', 'pomegranate', 'pineapple'
];
const NAMES: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];  */

@Component({
  selector: 'app-admin-table',
  templateUrl: './admin-table.component.html',
  styleUrls: ['./admin-table.component.scss']
})

export class AdminTableComponent implements AfterViewInit {

  /* PROPERTIES */
  projects: Project[] = []; //Will save array of Projects

  /* ANGULAR MATERIAL PROPERTIES */
  displayedColumns: string[] = [ 'title', 'publishedDate', 'deadlineDate', 'bid', 'state'];
  // Assign the data to the data source for the table to render
  dataSource: MatTableDataSource<Project> = new MatTableDataSource(this.projects);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  

  constructor( public apiService: ApiService) {
    this.getProjects();

    // Create 100 users
    // const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  /* METHODS */
  //Subscribes to the ApiService's observable and gets all projects
  getProjects() {
    this.apiService.getAllProjects()
      .subscribe((projects) => {
        this.dataSource.data = projects as Project[];
      } );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

