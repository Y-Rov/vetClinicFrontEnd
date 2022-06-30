import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPortfolioEditComponent } from './user-portfolio-edit.component';

describe('UserPortfolioEditComponent', () => {
  let component: UserPortfolioEditComponent;
  let fixture: ComponentFixture<UserPortfolioEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPortfolioEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserPortfolioEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
