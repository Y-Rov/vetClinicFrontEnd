import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExceptionTodayPageComponent } from './exception-today-page.component';

describe('ExceptionTodayPageComponent', () => {
  let component: ExceptionTodayPageComponent;
  let fixture: ComponentFixture<ExceptionTodayPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExceptionTodayPageComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ExceptionTodayPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
