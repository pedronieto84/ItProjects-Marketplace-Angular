import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateProjectComponent } from './create-project.component';
import { CreateProjectRoutingRoutingModule } from './create-project-routing.module';
import { SharedModule } from 'src/app/components/shared/shared.module';



@NgModule({
  declarations: [
    CreateProjectComponent
  ],
  imports: [
    CommonModule,
    CreateProjectRoutingRoutingModule,
    SharedModule
    
  ]
})
export class CreateProjectModule { }
