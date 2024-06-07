import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Componenet1Component } from './componenet1/componenet1.component';

import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children:[
    ]
  }
]

@NgModule({
  declarations: [
    Componenet1Component
  ],
  imports: [
    CommonModule,
  ]
})
export class Modulo1Module { }
