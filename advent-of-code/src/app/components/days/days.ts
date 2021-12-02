import { Component } from '@angular/core';
import { DaysData } from 'src/app/data/days.data';

@Component({
  selector: 'app-days',
  templateUrl: './days.html',
})
export class DaysComponent {
  snowFlakes: number[] = new Array(
    Number(
      getComputedStyle(document.documentElement).getPropertyValue(
        '--snow-count'
      )
    )
  );
  daysCount: { dayNmbr: number; disabled: boolean }[] = DaysData.init();
}
