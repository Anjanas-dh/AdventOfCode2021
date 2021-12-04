import { Component } from '@angular/core';
import { DataService } from 'src/app/data/data.service';
import { Day2Challenge1InputData } from './day2-challenge-input.data';

@Component({
  selector: 'app-day2',
  templateUrl: './day2.html',
})
export class Day2Component {
  challengeInput: IMovementInput[] = [];
  answerChallengeOne: number = 0;
  answerChallengeTwo: number = 0;

  constructor(private dataService: DataService) {}

  ngOnInit(): Promise<any> {
    return this.dataService
      .getChallengeTwoData()
      .then((data: IMovementInput[]) => {
        this.challengeInput = data;
        this.challengeOne();
        this.challengeTwo();
        return;
      });
  }

  challengeOne() {
    let horizontalPosition = 0;
    let depth = 0;
    this.challengeInput.forEach((x: IMovementInput) => {
      switch (x.movement) {
        case Movement.forward:
          horizontalPosition += x.increment;
          break;
        case Movement.down:
          depth += x.increment;
          break;
        case Movement.up:
          depth -= x.increment;
          break;
        default:
          break;
      }
    });
    this.answerChallengeOne = horizontalPosition * depth;
  }

  challengeTwo() {
    let horizontalPosition = 0;
    let depth = 0;
    let aim = 0;

    this.challengeInput.forEach((x: IMovementInput) => {
      switch (x.movement) {
        case Movement.forward:
          horizontalPosition += x.increment;
          depth += aim * x.increment;
          break;
        case Movement.down:
          aim += x.increment;
          break;
        case Movement.up:
          aim -= x.increment;
          break;
        default:
          break;
      }
    });
    this.answerChallengeTwo = horizontalPosition * depth;
  }
}

export enum Movement {
  forward = 'forward',
  down = 'down',
  up = 'up',
}

export interface IMovementInput {
  movement: Movement;
  increment: number;
}
