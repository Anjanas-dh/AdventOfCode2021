import { Component } from '@angular/core';
import { DataService } from 'src/app/data/data.service';

@Component({
  selector: 'app-day4',
  templateUrl: './day4.html',
})
export class Day4Component {
  challengeInput: IBingoCardNumber[] = [];
  challengeInputBingoNumbers: number[] = [];
  answerChallengeOne: number = 0;
  answerChallengeTwo: number = 0;
  bingo: boolean = false;
  countBingos: number = 0;
  allWonBingos: IBingoCardNumber[][][] = [];
  constructor(private dataService: DataService) {}

  ngOnInit(): Promise<any> {
    return Promise.all([
      this.dataService.getChallengeFourData(),
      this.dataService.getChallengeFourDataBingoNumbers(),
    ]).then((data: { 0: IBingoCardNumber[]; 1: number[] }) => {
      this.challengeInput = data[0];
      this.challengeInputBingoNumbers = data[1];
      this.answerChallengeOne = this.checkBingo('first');
      this.answerChallengeTwo = this.checkBingo('last');
    });
  }

  private checkBingo(returnBingo: 'first' | 'last'): number {
    let winningAnswer: number = 0;
    const split = 5;
    let input: IBingoCardNumber[] = [...this.challengeInput];
    let groupedNumbersByFive: IBingoCardNumber[][] = [];
    let groupedBingoCards: IBingoCardNumber[][][] = [];
    for (let i = 0, j = input.length; i < j; i += split) {
      groupedNumbersByFive.push(input.slice(i, i + split));
    }
    for (let i = 0, j = groupedNumbersByFive.length; i < j; i += split) {
      groupedBingoCards.push(groupedNumbersByFive.slice(i, i + split));
    }

    for (
      let index = 0;
      index < this.challengeInputBingoNumbers.length;
      index++
    ) {
      for (let ndx = 0; ndx < groupedBingoCards.length; ndx++) {
        groupedBingoCards[ndx].forEach((y: IBingoCardNumber[]) => {
          y.map((z: IBingoCardNumber) => {
            if (z.nmbr == this.challengeInputBingoNumbers[index]) {
              z.completed = true;
            }
          });
        });
        if (
          this.checkBingoCardVerticals(groupedBingoCards[ndx]) ||
          this.checkBingoCardHorizontals(groupedBingoCards[ndx])
        ) {
          this.countBingos++;
          this.bingo = true;

          if (returnBingo === 'first') {
            winningAnswer = this.calculateWinningAnswer(
              groupedBingoCards[ndx],
              this.challengeInputBingoNumbers[index]
            );
            break;
          }

          if (returnBingo === 'last') {
            const findLastWon = this.allWonBingos.find(
              (x) =>
                x
                  .map((y) => y.map((z) => z.nmbr))[0]
                  .reduce((partial_sum, a) => partial_sum + a, 0) ===
                groupedBingoCards[ndx]
                  .map((y) => y.map((z) => z.nmbr))[0]
                  .reduce((partial_sum, a) => partial_sum + a, 0)
            );

            if (!findLastWon) {
              this.allWonBingos.push([...groupedBingoCards[ndx]]);
              winningAnswer = this.calculateWinningAnswer(
                this.allWonBingos[this.allWonBingos.length - 1],
                this.challengeInputBingoNumbers[index]
              );
            }
            if (index === this.challengeInputBingoNumbers.length - 1) {
              break;
            }
          }
        }
      }
      if (this.bingo && returnBingo === 'first') {
        break;
      }
    }
    return winningAnswer;
  }

  private checkBingoCardVerticals(bingoCard: IBingoCardNumber[][]): boolean {
    let bingo: boolean = false;
    for (let index = 0; index < 5; index++) {
      let completedHorizontal: number = 0;
      for (let i = 0; i < bingoCard.length; i++) {
        if (bingoCard[i][index].completed) {
          completedHorizontal++;
        }
      }
      if ((bingo = completedHorizontal === 5)) {
        break;
      }
    }
    return bingo;
  }

  private checkBingoCardHorizontals(bingoCard: IBingoCardNumber[][]): boolean {
    let bingo: boolean = false;
    for (let index = 0; index < bingoCard.length; index++) {
      if ((bingo = bingoCard[index].filter((x) => !x.completed).length === 0)) {
        break;
      }
    }
    return bingo;
  }

  private calculateWinningAnswer(
    bingoCard: IBingoCardNumber[][],
    winningBingoNumber: number
  ): number {
    let totalCountIncompletedNumbers: number = 0;
    bingoCard.forEach((x: IBingoCardNumber[]) => {
      totalCountIncompletedNumbers += x
        .filter((y: IBingoCardNumber) => !y.completed)
        .reduce((partial_sum, a) => partial_sum + a.nmbr, 0);
    });
    return totalCountIncompletedNumbers * winningBingoNumber;
  }
}

export interface IBingoCardNumber {
  nmbr: number;
  completed: boolean;
}
