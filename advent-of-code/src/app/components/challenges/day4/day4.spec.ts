import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DataService } from 'src/app/data/data.service';
import { DataServiceMock } from 'src/app/data/data.service.mock';
import { Day4Component } from './day4';

describe('Day4Component', () => {
  let component: Day4Component;
  let fixture: ComponentFixture<Day4Component>;
  let dataServiceSpy: jasmine.SpyObj<DataService>;
  const testInputBingoNumbers = [
    7, 4, 9, 5, 11, 17, 23, 2, 0, 14, 21, 24, 10, 16, 13, 6, 15, 25, 12, 22, 18,
    20, 8, 19, 3, 26, 1,
  ];
  const testInputBingoCards = [
    22, 13, 17, 11, 0, 8, 2, 23, 4, 24, 21, 9, 14, 16, 7, 6, 10, 3, 18, 5, 1,
    12, 20, 15, 19, 3, 15, 0, 2, 22, 9, 18, 13, 17, 5, 19, 8, 7, 25, 23, 20, 11,
    10, 24, 4, 14, 21, 16, 12, 6, 14, 21, 17, 24, 4, 10, 16, 15, 9, 19, 18, 8,
    23, 26, 20, 22, 11, 13, 6, 5, 2, 0, 12, 3, 7,
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Day4Component],
      providers: [
        {
          provide: DataService,
          useFactory: () => DataServiceMock.instance(),
        },
      ],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(Day4Component);
        component = fixture.componentInstance;
        dataServiceSpy = TestBed.inject(
          DataService
        ) as jasmine.SpyObj<DataService>;
      });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test challenge one answer [horizontal bingo]', async () => {
    dataServiceSpy.getChallengeFourDataBingoNumbers.and.returnValue(
      Promise.resolve(testInputBingoNumbers)
    );
    dataServiceSpy.getChallengeFourData.and.returnValue(
      Promise.resolve(
        testInputBingoCards.map((x) => {
          return { nmbr: x, completed: false };
        })
      )
    );
    await component.ngOnInit();
    expect(component.answerChallengeOne).toEqual(4512);
  });

  it('should test challenge one answer [vertical bingo]', async () => {
    dataServiceSpy.getChallengeFourDataBingoNumbers.and.returnValue(
      Promise.resolve([22, 8, 21, 1, 6])
    );
    dataServiceSpy.getChallengeFourData.and.returnValue(
      Promise.resolve(
        testInputBingoCards.map((x) => {
          return { nmbr: x, completed: false };
        })
      )
    );
    await component.ngOnInit();
    expect(component.answerChallengeOne).toEqual(1452);
  });

  it('should test challenge two answer', async () => {
    fixture.detectChanges();
    fixture.whenStable();
    await component.ngOnInit();
    // expect(component.answerChallengeTwo).toEqual(230);
  });
});
