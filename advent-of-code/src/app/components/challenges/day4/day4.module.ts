import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Day4Component } from './day4';

const routes: Routes = [
  {
    path: '',
    component: Day4Component,
  },
];
@NgModule({
  declarations: [Day4Component],
  imports: [CommonModule, RouterModule.forChild(routes)],
  providers: [],
  exports: [],
  entryComponents: [],
})
export class Day4Module {}
