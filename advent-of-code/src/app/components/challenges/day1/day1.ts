import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data/data.service';

@Component({
  selector: 'app-day1',
  templateUrl: './day1.html',
})
export class Day1Component implements OnInit {
  challengeInput: number[] = [];
  answerChallengeOne: number = 0;
  answerChallengeTwo: number = 0;

  constructor(private dataService: DataService) {}

  ngOnInit(): Promise<any> {
    return this.dataService.getChallengeOneData().then((data: number[]) => {
      this.challengeInput = data;
      this.challengeOne();
      this.challengeTwo();
      return;
    });
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
    this.answerChallengeTwo = this.calculateIncrements(
      this.groupArrayByChunks()
    );
  }

  private groupArrayByChunks() {
    const split = 3;
    const skip = 4;
    let groupAll: { group: string; totals: number[] }[] = [
      { group: 'A', totals: [] },
      { group: 'B', totals: [] },
      { group: 'C', totals: [] },
      { group: 'D', totals: [] },
    ];
    for (let index = 0; index < 4; index++) {
      for (let i = index, j = this.challengeInput.length; i < j; i += skip) {
        groupAll[index].totals.push(
          this.challengeInput
            .slice(i, i + split)
            .reduce((partial_sum, a) => partial_sum + a, 0)
        );
      }
    }
    return groupAll;
  }

  private calculateIncrements(groupAll: { group: string; totals: number[] }[]) {
    let totalIncrements: number = 0;

    for (let index = 0; index < groupAll[0].totals.length; index++) {
      for (let i = 0; i < groupAll.length; i++) {
        if (groupAll[i].totals[index] === undefined) {
          break;
        }
        const groupIndex = i === groupAll.length - 1 ? 0 : i + 1;
        const totalsIndex = i === groupAll.length - 1 ? index + 1 : index;
        if (
          groupAll[groupIndex].totals[totalsIndex] !== undefined &&
          groupAll[groupIndex].totals[totalsIndex] > groupAll[i].totals[index]
        ) {
          totalIncrements++;
        }
      }
    }
    return totalIncrements;
  }
}
