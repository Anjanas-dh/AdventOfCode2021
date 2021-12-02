import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Day2Component } from './day2';

const routes: Routes = [
  {
    path: '',
    component: Day2Component,
  },
];
@NgModule({
  declarations: [Day2Component],
  imports: [CommonModule, RouterModule.forChild(routes)],
  providers: [],
  exports: [],
  entryComponents: [],
})
export class Day2Module {}
