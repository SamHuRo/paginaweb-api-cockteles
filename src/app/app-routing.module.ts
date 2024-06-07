import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Componenet1Component } from './modulo1/componenet1/componenet1.component';
import { Componenet2Component } from './modulo2/componenet2/componenet2.component';

//Rutas principales de la aplicación 
const routes: Routes = [
  {
    path: 'modulo1', 
    loadChildren: () => import('./modulo1/modulo1.module').then(m => m.Modulo1Module),
    component: Componenet1Component},
  {
    path: 'modulo2', 
    loadChildren: () => import('./modulo2/modulo2.module').then(m => m.Modulo2Module),
    component: Componenet2Component},
  // {
  //   path: '**',
  //   redirectTo: 'modulo1'
  // }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
