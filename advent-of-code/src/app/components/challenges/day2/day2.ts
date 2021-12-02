import { Component } from '@angular/core';
import { Day2Challenge1InputData } from './day2-challenge-input.data';

@Component({
  selector: 'app-day2',
  templateUrl: './day2.html',
})
export class Day2Component {
  challengeInput: IMovementInput[] = Day2Challenge1InputData.init().map(
    (x: string) => {
      const splittedArray: [key: string] | string[] = x.split(' ');
      return {
        movement:
          Movement[splittedArray[0].toLowerCase() as keyof typeof Movement],
        increment: Number(splittedArray[1]),
      } as IMovementInput;
    }
  );
  answerChallengeOne: number = 0;

  ngOnInit() {
    this.challengeOne();
    this.challengeTwo();
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

  challengeTwo() {}
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
