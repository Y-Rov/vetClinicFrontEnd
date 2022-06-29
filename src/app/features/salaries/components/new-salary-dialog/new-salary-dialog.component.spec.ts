import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSalaryDialogComponent } from './new-salary-dialog.component';

describe('NewSalaryDialogComponent', () => {
  let component: NewSalaryDialogComponent;
  let fixture: ComponentFixture<NewSalaryDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewSalaryDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewSalaryDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
