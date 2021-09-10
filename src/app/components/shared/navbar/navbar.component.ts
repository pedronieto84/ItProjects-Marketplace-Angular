import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  
  constructor( private ApiService: ApiService ) { }

  currentUser: any;

  ngOnInit(): void {
    this.ApiService.getUser('WUnYiEbXKkLhG2FptA1p').subscribe( resp => {
      this.currentUser = resp;
      console.log( this.currentUser );
    });
 }

  ngOnDestroy(): void {
    this.currentUser.unsubscribe();
  }
}
