import { Component } from '@angular/core';
import { DaysData } from 'src/app/data/days.data';

@Component({
  selector: 'app-days',
  templateUrl: './days.html',
})
export class DaysComponent {
  daysCount: { dayNmbr: number; disabled: boolean }[] = DaysData.init();
}
