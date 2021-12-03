import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Day3Component } from './day3';

const routes: Routes = [
  {
    path: '',
    component: Day3Component,
  },
];
@NgModule({
  declarations: [Day3Component],
  imports: [CommonModule, RouterModule.forChild(routes)],
  providers: [],
  exports: [],
  entryComponents: [],
})
export class Day3Module {}
