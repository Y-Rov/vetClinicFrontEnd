import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecializationDeleteDialogComponent } from './specialization-delete-dialog.component';

describe('SpecializationDeleteDialogComponent', () => {
  let component: SpecializationDeleteDialogComponent;
  let fixture: ComponentFixture<SpecializationDeleteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecializationDeleteDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecializationDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
