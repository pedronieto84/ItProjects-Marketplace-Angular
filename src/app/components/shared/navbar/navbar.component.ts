import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/interfaces';
import { UsersService } from '../../../services/users.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  
  constructor( private UsersService: UsersService ) { }

  currentUser: any;

  ngOnInit(): void {
    this.UsersService.getUser().subscribe( resp => {
      this.currentUser = resp;
      console.log( this.currentUser );
    });
  }

  ngOnDestroy(): void {
    this.currentUser.unsubscribe();
  }
}
