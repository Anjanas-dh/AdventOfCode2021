import { Component } from '@angular/core';
import { Day3Challenge1InputData } from './day3-challenge-input.data';

@Component({
  selector: 'app-day3',
  templateUrl: './day3.html',
})
export class Day3Component {
  challengeInput: string[] = Day3Challenge1InputData.init();
  answerChallengeOne: number = 0;
  answerChallengeTwo: number = 0;

  ngOnInit() {
    this.challengeOne();
    // this.challengeTwo();
  }

  challengeOne() {
    let resultGammaBinary: number[] = [];
    let resultEpsilonBinary: number[] = [];
    let splittedArray: number[][] = [];
    splittedArray = this.challengeInput.map((x: string) => {
      return x.split('').map((y) => Number(y));
    });

    const groupedByIndex: number[][] = this.groupArray(
      splittedArray.reduce(function (a, b) {
        return a.concat(b);
      }),
      this.challengeInput[0].split('').length
    );

    groupedByIndex.forEach((x: number[], i: number) => {
      let zeros = x.filter((y: number) => y === 0);
      let ones = x.filter((y: number) => y === 1);
      resultGammaBinary.push(zeros.length > ones.length ? 0 : 1);
      resultEpsilonBinary.push(zeros.length < ones.length ? 0 : 1);
    });

    this.answerChallengeOne =
      parseInt(resultGammaBinary.join(''), 2) *
      parseInt(resultEpsilonBinary.join(''), 2);
  }

  groupArray(array: number[], n: number) {
    return array.reduce((acc: any[], number: number, i: number) => {
      acc[i % n] = acc[i % n] || [];
      acc[i % n].push(number);
      return acc;
    }, []);
  }

  challengeTwo() {}
}
