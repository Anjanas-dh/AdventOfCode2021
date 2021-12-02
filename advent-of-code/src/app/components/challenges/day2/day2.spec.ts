import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Day2Component, Movement } from './day2';

describe('Day2Component', () => {
  let component: Day2Component;
  let fixture: ComponentFixture<Day2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Day2Component],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day2Component);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test challenge two answer', () => {
    fixture.detectChanges();
    fixture.whenStable();
    component.challengeOne();
    component.challengeInput = [
      { movement: Movement.forward, increment: 5 },
      { movement: Movement.down, increment: 5 },
      { movement: Movement.forward, increment: 8 },
      { movement: Movement.up, increment: 3 },
      { movement: Movement.down, increment: 8 },
      { movement: Movement.forward, increment: 2 },
    ];
    component.challengeOne();
    expect(component.answerChallengeOne).toEqual(150);
  });
});
