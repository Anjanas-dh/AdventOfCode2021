import { Injectable } from '@angular/core';
import { Day1Challenge1InputData } from '../components/challenges/day1/day1-challenge1-input.data';
import { IMovementInput, Movement } from '../components/challenges/day2/day2';
import { Day2Challenge1InputData } from '../components/challenges/day2/day2-challenge-input.data';
import { Day3Challenge1InputData } from '../components/challenges/day3/day3-challenge-input.data';
import { IBingoCardNumber } from '../components/challenges/day4/day4';
import {
  Day4Challenge1InputBingoNumbersData,
  Day4Challenge1InputData,
} from '../components/challenges/day4/day4-challenge-input.data';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  getChallengeOneData(): Promise<number[]> {
    return Promise.resolve(Day1Challenge1InputData.init());
  }
  getChallengeTwoData(): Promise<IMovementInput[]> {
    return Promise.resolve(
      Day2Challenge1InputData.init().map((x: string) => {
        const splittedArray: [key: string] | string[] = x.split(' ');
        return {
          movement:
            Movement[splittedArray[0].toLowerCase() as keyof typeof Movement],
          increment: Number(splittedArray[1]),
        } as IMovementInput;
      })
    );
  }
  getChallengeThreeData(): Promise<string[]> {
    return Promise.resolve(Day3Challenge1InputData.init());
  }
  getChallengeFourData(): Promise<IBingoCardNumber[]> {
    return Promise.resolve(
      Day4Challenge1InputData.init().map((x) => {
        return { nmbr: x, completed: false };
      })
    );
  }
  getChallengeFourDataBingoNumbers(): Promise<number[]> {
    return Promise.resolve(Day4Challenge1InputBingoNumbersData.init());
  }
}
