import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../../../interfaces/interfaces';

import {  Router } from '@angular/router';

@Component({
  selector: 'app-project-line',
  templateUrl: './project-line.component.html',
  styleUrls: ['./project-line.component.scss']
})
export class ProjectLineComponent implements OnInit {

  constructor(private router : Router) { }

  @Input() project: Project;

  ngOnInit(): void {
  }
    

}
