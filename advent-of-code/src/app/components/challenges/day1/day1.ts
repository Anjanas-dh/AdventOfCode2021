import { Component } from '@angular/core';
import { Day1Challenge1InputData } from './day1-challenge1-input.data';

@Component({
  selector: 'app-day1',
  templateUrl: './day1.html',
})
export class Day1Component {
  input: number[] = Day1Challenge1InputData.init();
}
