import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialStatementResultComponent } from './financial-statement-result.component';

describe('FinancialStatementResultComponent', () => {
  let component: FinancialStatementResultComponent;
  let fixture: ComponentFixture<FinancialStatementResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinancialStatementResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinancialStatementResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
