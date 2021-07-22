import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateProjectComponent } from './create-project.component';
import { CreateProjectRoutingRoutingModule } from './create-project-routing.module';
import { SharedModule } from 'src/app/components/shared/shared.module';

import { ProjectDescriptionModule } from 'src/app/components/unshared/project-description/project-description.module';
import { TechsetModule } from 'src/app/components/unshared/techset/techset.module';

@NgModule({
  declarations: [
    CreateProjectComponent,
  
  ],
  imports: [
    CommonModule,
    CreateProjectRoutingRoutingModule,
    SharedModule,
    ProjectDescriptionModule,
    TechsetModule
  ]
})
export class CreateProjectModule { }
