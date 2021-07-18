import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateProjectComponent } from './create-project.component';
import { CreateProjectRoutingRoutingModule } from './create-project-routing.module';



@NgModule({
  declarations: [
    CreateProjectComponent,
  ],
  imports: [
    CommonModule,
    CreateProjectRoutingRoutingModule
  ]
})
export class CreateProjectModule { }
