import { Component } from '@angular/core';
import { DaysData } from './data/days.data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  daysCount: { dayNmbr: number; disabled: boolean }[] = DaysData.init();
}
