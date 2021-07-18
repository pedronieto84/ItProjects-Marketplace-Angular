import { NgModule } from '@angular/core';
import { ProjectDetailComponent } from './project-detail.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: ProjectDetailComponent,
  }
]

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class ProjectDetailRoutingModule { }
