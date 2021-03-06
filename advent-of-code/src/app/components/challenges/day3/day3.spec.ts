import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DataService } from 'src/app/data/data.service';
import { DataServiceMock } from 'src/app/data/data.service.mock';
import { Day3Component } from './day3';

describe('Day3Component', () => {
  let component: Day3Component;
  let fixture: ComponentFixture<Day3Component>;
  let dataServiceSpy: jasmine.SpyObj<DataService>;
  const testInput = [
    '00100',
    '11110',
    '10110',
    '10111',
    '10101',
    '01111',
    '00111',
    '11100',
    '10000',
    '11001',
    '00010',
    '01010',
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Day3Component],
      providers: [
        {
          provide: DataService,
          useFactory: () => DataServiceMock.instance(),
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day3Component);
    component = fixture.componentInstance;
    dataServiceSpy = TestBed.inject(DataService) as jasmine.SpyObj<DataService>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test challenge one answer', async () => {
    dataServiceSpy.getChallengeThreeData.and.returnValue(
      Promise.resolve(testInput)
    );
    await component.ngOnInit();
    expect(component.answerChallengeOne).toEqual(198);
  });

  it('should test challenge two answer', async () => {
    dataServiceSpy.getChallengeThreeData.and.returnValue(
      Promise.resolve(testInput)
    );
    await component.ngOnInit();
    expect(component.answerChallengeTwo).toEqual(230);
  });
});
