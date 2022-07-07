import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmDeletionDialogComponent } from './confirm-deletion-dialog.component';

describe('ConfirmDeletionDialogComponent', () => {
  let component: ConfirmDeletionDialogComponent;
  let fixture: ComponentFixture<ConfirmDeletionDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmDeletionDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmDeletionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
