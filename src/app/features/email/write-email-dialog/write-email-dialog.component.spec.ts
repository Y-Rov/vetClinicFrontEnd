import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteEmailDialogComponent } from './write-email-dialog.component';

describe('WriteEmailDialogComponent', () => {
  let component: WriteEmailDialogComponent;
  let fixture: ComponentFixture<WriteEmailDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WriteEmailDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WriteEmailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
