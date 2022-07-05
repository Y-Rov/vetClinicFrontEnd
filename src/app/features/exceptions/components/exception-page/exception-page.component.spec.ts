import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExceptionPageComponent } from './exception-page.component';

describe('ExceptionPageComponent', () => {
  let component: ExceptionPageComponent;
  let fixture: ComponentFixture<ExceptionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExceptionPageComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ExceptionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
