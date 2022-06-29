import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecializationEditDialogComponent } from './specialization-edit-dialog.component';

describe('SpecializationEditDialogComponent', () => {
  let component: SpecializationEditDialogComponent;
  let fixture: ComponentFixture<SpecializationEditDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecializationEditDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecializationEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
