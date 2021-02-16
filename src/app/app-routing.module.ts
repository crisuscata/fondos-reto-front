import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarComponent } from './pages/color/listar/listar.component';
import { EditComponent } from './pages/color/edit/edit.component';
import { AddComponent } from './pages/color/add/add.component';

const routes: Routes = [
  { 
    path: '', loadChildren: () => import('./pages/auth/login/login.module').then(m => m.LoginModule) 
  },
  { 
    path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) 
  }, 
  { 
    path: 'notFound', loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule) 
  }, 
  { 
    path: 'login', loadChildren: () => import('./pages/auth/login/login.module').then(m => m.LoginModule) 
  },
  { 
   path:'crud', component:ListarComponent 
  },

  { 
    path:'edit', component:EditComponent 
   },

   { 
    path:'add', component:AddComponent 
   }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
