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
    path: 'day/3',
    loadChildren: () =>
      import('./components/challenges/day3/day3.module').then(
        (m) => m.Day3Module
      ),
  },
  {
    path: 'day/4',
    loadChildren: () =>
      import('./components/challenges/day4/day4.module').then(
        (m) => m.Day4Module
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
