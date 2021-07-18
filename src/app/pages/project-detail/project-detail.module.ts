import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectDetailComponent } from './project-detail.component';
import { ProjectDetailRoutingModule } from './project-detail-routing.module';



@NgModule({
  declarations: [ProjectDetailComponent],
  imports: [
    CommonModule, ProjectDetailRoutingModule
  ]
})
export class ProjectDetailModule { }
