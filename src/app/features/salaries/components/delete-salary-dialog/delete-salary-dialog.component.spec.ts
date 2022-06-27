import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSalaryDialogComponent } from './delete-salary-dialog.component';

describe('DeleteSalaryDialogComponent', () => {
  let component: DeleteSalaryDialogComponent;
  let fixture: ComponentFixture<DeleteSalaryDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteSalaryDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteSalaryDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
