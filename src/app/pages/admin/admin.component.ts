import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  /* PROPERTIES */
  active = 1; //Controls active link
  constructor() { }

  ngOnInit() {
  }

}

