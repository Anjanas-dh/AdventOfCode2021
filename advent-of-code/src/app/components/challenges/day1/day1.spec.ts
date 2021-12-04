import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DataService } from 'src/app/data/data.service';
import { DataServiceMock } from 'src/app/data/data.service.mock';
import { Day1Component } from './day1';

describe('Day1Component', () => {
  let component: Day1Component;
  let fixture: ComponentFixture<Day1Component>;
  let dataServiceSpy: jasmine.SpyObj<DataService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Day1Component],
      providers: [
        {
          provide: DataService,
          useFactory: () => DataServiceMock.instance(),
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day1Component);
    component = fixture.componentInstance;
    dataServiceSpy = TestBed.inject(DataService) as jasmine.SpyObj<DataService>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test challenge one answer', async () => {
    dataServiceSpy.getChallengeOneData.and.returnValue(
      Promise.resolve([199, 200, 208, 210, 200, 207, 240, 269, 260, 263])
    );
    await component.ngOnInit();
    expect(component.answerChallengeOne).toEqual(7);
  });

  it('should test challenge two answer', async () => {
    dataServiceSpy.getChallengeOneData.and.returnValue(
      Promise.resolve([199, 200, 208, 210, 200, 207, 240, 269, 260, 263])
    );
    await component.ngOnInit();
    expect(component.answerChallengeTwo).toEqual(5);
  });
});
