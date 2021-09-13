import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { Project } from '../../../interfaces/interfaces';


@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})

export class ProjectCardComponent implements OnInit {

  constructor( ) { }

  //variable que viene desde project-component y contiene el objeto proyecto
  @Input() project: Project;

  ngOnInit(): void {
    
  }

}
