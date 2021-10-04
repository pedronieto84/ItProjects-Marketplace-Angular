import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: []
})
export class NavbarComponent implements OnInit {

  
  constructor( private ApiService: ApiService ) { }

  currentUser: any;

  ngOnInit(): void {
    this.currentUser = JSON.parse(localStorage.getItem('usuario')); 
    console.log('usr id',  this.currentUser.userId);

   /* this.ApiService.getUser(usr).subscribe( resp => {
      this.currentUser = resp;
      console.log( ' this.currentUser',this.currentUser );
    });*/
 }

  ngOnDestroy(): void {
    //this.currentUser.unsubscribe();
  }
}
