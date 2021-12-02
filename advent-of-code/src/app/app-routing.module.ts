import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'day/1',
    loadChildren: () =>
      import('./components/challenges/day1/day1.module').then(
        (m) => m.Day1Module
      ),
  },
  {
    path: 'day/2',
    loadChildren: () =>
      import('./components/challenges/day2/day2.module').then(
        (m) => m.Day2Module
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('./components/days/days.module').then((m) => m.DaysModule),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
