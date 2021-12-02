import { Component, OnInit } from '@angular/core';
import { Day1Challenge1InputData } from './day1-challenge1-input.data';

@Component({
  selector: 'app-day1',
  templateUrl: './day1.html',
})
export class Day1Component implements OnInit {
  challengeInput: number[] = [];
  answerChallengeOne: number = 0;
  answerChallengeTwo: number = 0;

  ngOnInit() {
    this.challengeInput = Day1Challenge1InputData.init();
    this.challengeOne();
  }

  challengeOne() {
    for (let index = 0; index < this.challengeInput.length; index++) {
      if (
        index !== 0 &&
        this.challengeInput[index] > this.challengeInput[index - 1]
      ) {
        this.answerChallengeOne++;
      }
    }
    return this.answerChallengeOne;
  }
}
