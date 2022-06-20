import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecializationAddProcedureComponent } from './specialization-add-procedure.component';

describe('SpecializationAddProcedureComponent', () => {
  let component: SpecializationAddProcedureComponent;
  let fixture: ComponentFixture<SpecializationAddProcedureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecializationAddProcedureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecializationAddProcedureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
