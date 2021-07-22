import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/interfaces';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() user: User;
  
  loggedIn = true;

  constructor() { }

  ngOnInit(): void {
  
  }

}
