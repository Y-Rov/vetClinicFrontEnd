import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainAnimalComponent } from './main-animal.component';

describe('MainAnimalComponent', () => {
  let component: MainAnimalComponent;
  let fixture: ComponentFixture<MainAnimalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainAnimalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
