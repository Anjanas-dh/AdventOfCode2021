import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Day1Component } from './day1';

describe('Day1Component', () => {
  let component: Day1Component;
  let fixture: ComponentFixture<Day1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Day1Component],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day1Component);
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
      ...[199, 200, 208, 210, 200, 207, 240, 269, 260, 263],
    ];
    component.challengeOne();
    expect(component.answerChallengeOne).toEqual(7);
  });

  it('should test challenge two answer', () => {
    fixture.detectChanges();
    fixture.whenStable();
    component.challengeInput = [
      ...[199, 200, 208, 210, 200, 207, 240, 269, 260, 263],
    ];
    component.challengeTwo();
    expect(component.answerChallengeTwo).toEqual(5);
  });
});
