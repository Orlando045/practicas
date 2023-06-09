import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
   path: 'login',
   component: LoginComponent,
   
  },
  {
    path: 'main',
    component: MainComponent,
    children: [
      {
        path: 'menu/:id2',
        component:MenuComponent,
      },
    ]
  },
  {
    path: 'menu',
  component: MenuComponent,
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
