import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DataService } from 'src/app/data/data.service';
import { DataServiceMock } from 'src/app/data/data.service.mock';
import { Day2Component, Movement } from './day2';

describe('Day2Component', () => {
  let component: Day2Component;
  let fixture: ComponentFixture<Day2Component>;
  let dataServiceSpy: jasmine.SpyObj<DataService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Day2Component],
      providers: [
        {
          provide: DataService,
          useFactory: () => DataServiceMock.instance(),
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day2Component);
    component = fixture.componentInstance;
    dataServiceSpy = TestBed.inject(DataService) as jasmine.SpyObj<DataService>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test challenge one answer', async () => {
    dataServiceSpy.getChallengeTwoData.and.returnValue(
      Promise.resolve([
        { movement: Movement.forward, increment: 5 },
        { movement: Movement.down, increment: 5 },
        { movement: Movement.forward, increment: 8 },
        { movement: Movement.up, increment: 3 },
        { movement: Movement.down, increment: 8 },
        { movement: Movement.forward, increment: 2 },
      ])
    );
    await component.ngOnInit();
    expect(component.answerChallengeOne).toEqual(150);
  });

  it('should test challenge two answer', async () => {
    dataServiceSpy.getChallengeTwoData.and.returnValue(
      Promise.resolve([
        { movement: Movement.forward, increment: 5 },
        { movement: Movement.down, increment: 5 },
        { movement: Movement.forward, increment: 8 },
        { movement: Movement.up, increment: 3 },
        { movement: Movement.down, increment: 8 },
        { movement: Movement.forward, increment: 2 },
      ])
    );
    await component.ngOnInit();
    expect(component.answerChallengeTwo).toEqual(900);
  });
});
