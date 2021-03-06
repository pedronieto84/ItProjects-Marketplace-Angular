import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './pages/admin/admin.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { CreateProjectComponent } from './pages/create-project/create-project.component';
import { MyAccountComponent } from './pages/my-account/my-account.component';
import { LoginComponent } from './pages/login/login.component';


const routes: Routes = [


  {
    path: 'detall-projecte/:id',
    loadChildren: () => import('./pages/project-detail/project-detail.module').then(m => m.ProjectDetailModule)
  },
  {
    path: 'crear-projecte',
    loadChildren: () => import('./pages/create-project/create-project.module').then(m => m.CreateProjectModule)
  },
  { 
    path: 'admin',
    loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule)
  },
  { 
    path: 'projects',
    loadChildren: () => import('./pages/projects/projects.module').then(m => m.ProjectsModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'registre',
    loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterModule)
  },
  {
    path: 'el-meu-compte',
    loadChildren: () => import('./pages/my-account/my-account.module').then(m => m.MyAccountModule)
  },
  {
    path: '',
    loadChildren: () => import('./pages/projects/projects.module').then(m => m.ProjectsModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
