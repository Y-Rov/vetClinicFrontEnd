import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExceptionDetailPageComponent } from './exception-detail-page.component';

describe('ExceptionDetailPageComponent', () => {
  let component: ExceptionDetailPageComponent;
  let fixture: ComponentFixture<ExceptionDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExceptionDetailPageComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ExceptionDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
