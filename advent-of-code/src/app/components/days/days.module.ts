import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DaysComponent } from './days';

const routes: Routes = [
  {
    path: '',
    component: DaysComponent,
  },
];
@NgModule({
  declarations: [DaysComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  providers: [],
  exports: [],
  entryComponents: [],
})
export class DaysModule {}
