import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../../../interfaces/interfaces';

import {  Router } from '@angular/router';
@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})

export class ProjectCardComponent implements OnInit {

  constructor( private router : Router) { }

  //variable que viene desde project-component y contiene el objeto proyecto
  @Input() project: Project;


 
  ngOnInit(): void {
    
  }

}
