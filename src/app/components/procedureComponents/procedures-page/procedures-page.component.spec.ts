import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProceduresPageComponent } from './procedures-page.component';

describe('ProceduresPageComponent', () => {
  let component: ProceduresPageComponent;
  let fixture: ComponentFixture<ProceduresPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProceduresPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProceduresPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
