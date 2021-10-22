/* Angular Imports */
import {AfterViewInit, Component, ViewChild} from '@angular/core';

/* Angular Material Imports */
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

/* App Imports */
import { User } from 'src/app/interfaces/interfaces';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})

export class UserTableComponent {

  /* PROPERTIES */
  users: User[] = []; //Will save array of Users

  /* ANGULAR MATERIAL PROPERTIES */
  displayedColumns: string[] = [ 'name', 'email', 'password'];
  // Assign the data to the data source for the table to render
  dataSource: MatTableDataSource<User> = new MatTableDataSource(this.users);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  

  constructor( public apiService: ApiService) {
    this.getUsers();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  /* METHODS */
  //Subscribes to the ApiService's observable and gets all projects
  getUsers() {
    this.apiService.getUsers()
      .subscribe((users) => {
        this.dataSource.data = users as User[];
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
