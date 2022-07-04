import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecializationListComponent } from './specialization-list.component';

describe('SpecializationListComponent', () => {
  let component: SpecializationListComponent;
  let fixture: ComponentFixture<SpecializationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecializationListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecializationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
