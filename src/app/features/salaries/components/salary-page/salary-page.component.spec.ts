import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryPageComponent } from './salary-page.component';

describe('SalaryPageComponent', () => {
  let component: SalaryPageComponent;
  let fixture: ComponentFixture<SalaryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalaryPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalaryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
