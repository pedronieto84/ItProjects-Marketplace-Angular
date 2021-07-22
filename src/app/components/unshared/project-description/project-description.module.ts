import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectDescriptionComponent } from './project-description.component';



@NgModule({
  declarations: [
    ProjectDescriptionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProjectDescriptionComponent
  ]
})
export class ProjectDescriptionModule { }
