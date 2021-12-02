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
    this.challengeTwo();
  }

  challengeOne() {
    let totalIncrements: number = 0;
    for (let index = 0; index < this.challengeInput.length; index++) {
      if (
        index !== 0 &&
        this.challengeInput[index] > this.challengeInput[index - 1]
      ) {
        totalIncrements++;
      }
    }
    this.answerChallengeOne = totalIncrements;
  }

  challengeTwo() {
    let totalIncrements: number = 0;
    const split = 3;
    const skip = 4;
    let groupedATotal: number[] = [];
    let groupedBTotal: number[] = [];
    let groupedCTotal: number[] = [];
    let groupedDTotal: number[] = [];
    for (let i = 0, j = this.challengeInput.length; i < j; i += skip) {
      groupedATotal.push(
        this.challengeInput
          .slice(i, i + split)
          .reduce((partial_sum, a) => partial_sum + a, 0)
      );
    }
    for (let i = 1, j = this.challengeInput.length; i < j; i += skip) {
      groupedBTotal.push(
        this.challengeInput
          .slice(i, i + split)
          .reduce((partial_sum, a) => partial_sum + a, 0)
      );
    }
    for (let i = 2, j = this.challengeInput.length; i < j; i += skip) {
      groupedCTotal.push(
        this.challengeInput
          .slice(i, i + split)
          .reduce((partial_sum, a) => partial_sum + a, 0)
      );
    }
    for (let i = 3, j = this.challengeInput.length; i < j; i += skip) {
      groupedDTotal.push(
        this.challengeInput
          .slice(i, i + split)
          .reduce((partial_sum, a) => partial_sum + a, 0)
      );
    }

    for (let index = 0; index < groupedATotal.length; index++) {
      if (
        groupedBTotal[index] !== undefined &&
        groupedATotal[index] !== undefined &&
        groupedBTotal[index] > groupedATotal[index]
      ) {
        totalIncrements++;
      }

      if (
        groupedCTotal[index] !== undefined &&
        groupedBTotal[index] !== undefined &&
        groupedCTotal[index] > groupedBTotal[index]
      ) {
        totalIncrements++;
      }

      if (
        groupedDTotal[index] !== undefined &&
        groupedCTotal[index] !== undefined &&
        groupedDTotal[index] > groupedCTotal[index]
      ) {
        totalIncrements++;
      }

      if (
        groupedATotal[index + 1] !== undefined &&
        groupedDTotal[index] !== undefined &&
        groupedATotal[index + 1] > groupedDTotal[index]
      ) {
        totalIncrements++;
      }
    }
    this.answerChallengeTwo = totalIncrements;
  }
}
