import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Day3Component } from './day3';

describe('Day3Component', () => {
  let component: Day3Component;
  let fixture: ComponentFixture<Day3Component>;
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
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day3Component);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  fit('should test challenge one answer', () => {
    fixture.detectChanges();
    fixture.whenStable();
    component.challengeInput = testInput;
    component.challengeOne();
    expect(component.answerChallengeOne).toEqual(198);
  });

  it('should test challenge two answer', () => {
    fixture.detectChanges();
    fixture.whenStable();
    component.challengeInput = testInput;
    component.challengeTwo();
    expect(component.answerChallengeTwo).toEqual(900);
  });
});
