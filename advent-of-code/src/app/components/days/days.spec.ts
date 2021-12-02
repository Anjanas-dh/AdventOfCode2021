import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DaysComponent } from './days';

describe('DaysComponent', () => {
  let component: DaysComponent;
  let fixture: ComponentFixture<DaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DaysComponent],
      imports: [RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
