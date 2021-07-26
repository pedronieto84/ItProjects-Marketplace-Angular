import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/interfaces';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  usuarioPrueba: User = {
    id: "12345",
    name: "Carlos Castillo",
    email: "prueba@prueba.com",
    password: "12345",
    verified: true,
    publishedProjects: ["", ""],
    admin: true
  };
    
  loggedIn = true;

  constructor() { }

  ngOnInit(): void {
  
  }

}
