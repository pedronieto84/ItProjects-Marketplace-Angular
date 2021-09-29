import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { ProjectsComponent } from './projects.component';

import { ProjectsRoutingModule } from './projects-routing.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//modules
import { SharedModule } from 'src/app/components/shared/shared.module' 

@NgModule({
  declarations: [
    ProjectsComponent
  ],
  imports: [
    CommonModule, 
    ProjectsRoutingModule, 
    NgbModule,
    SharedModule    
  ]
})
export class ProjectsModule { }
