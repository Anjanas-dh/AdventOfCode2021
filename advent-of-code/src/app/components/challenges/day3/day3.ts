import { Component } from '@angular/core';
import { DataService } from 'src/app/data/data.service';
import { Day3Challenge1InputData } from './day3-challenge-input.data';

@Component({
  selector: 'app-day3',
  templateUrl: './day3.html',
})
export class Day3Component {
  challengeInput: string[] = Day3Challenge1InputData.init();
  answerChallengeOne: number = 0;
  answerChallengeTwo: number = 0;

  constructor(private dataService: DataService) {}

  ngOnInit(): Promise<any> {
    return this.dataService.getChallengeThreeData().then((data: string[]) => {
      this.challengeInput = data;
      this.challengeOne();
      this.challengeTwo();
      return;
    });
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

  challengeTwo() {
    let filteredOxygenArray: string[] = [...this.challengeInput];
    let filteredCo2Array: string[] = [...this.challengeInput];
    for (let index = 0; index < this.challengeInput[0].length; index++) {
      if (filteredOxygenArray.length !== 1) {
        let filterOxygenZeros = filteredOxygenArray.filter((x: string) => {
          return x[index] == '0';
        });
        let filterOxygenOnes = filteredOxygenArray.filter((x: string) => {
          return x[index] == '1';
        });
        filteredOxygenArray =
          filterOxygenZeros.length === filterOxygenOnes.length
            ? filterOxygenOnes
            : filterOxygenZeros.length > filterOxygenOnes.length
            ? filterOxygenZeros
            : filterOxygenOnes;
      }
      if (filteredCo2Array.length !== 1) {
        let filterCo2Zeros = filteredCo2Array.filter((x: string) => {
          return x[index] == '0';
        });
        let filterCo2Ones = filteredCo2Array.filter((x: string) => {
          return x[index] == '1';
        });
        filteredCo2Array =
          filterCo2Zeros.length === filterCo2Ones.length
            ? filterCo2Zeros
            : filterCo2Zeros.length > filterCo2Ones.length
            ? filterCo2Ones
            : filterCo2Zeros;
      }
    }
    this.answerChallengeTwo =
      parseInt(filteredOxygenArray[0], 2) * parseInt(filteredCo2Array[0], 2);
  }
}
