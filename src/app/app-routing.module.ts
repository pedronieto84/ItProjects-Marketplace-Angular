import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [


  {
    path: 'detall-projecte',
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
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'registre',
    loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterModule)
  },
  {
    path: 'crear-compte',
    loadChildren: () => import('./pages/create-account/create-account.module').then(m => m.CreateAccountModule)
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
