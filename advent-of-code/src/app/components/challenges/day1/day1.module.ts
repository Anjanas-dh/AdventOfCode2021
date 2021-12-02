import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Day1Component } from './day1';

const routes: Routes = [
  {
    path: '',
    component: Day1Component,
  },
];
@NgModule({
  declarations: [Day1Component],
  imports: [CommonModule, RouterModule.forChild(routes)],
  providers: [],
  exports: [],
  entryComponents: [],
})
export class Day1Module {}
