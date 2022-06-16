import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalMedcardComponent } from './animal-medcard.component';

describe('AnimalMedcardComponent', () => {
  let component: AnimalMedcardComponent;
  let fixture: ComponentFixture<AnimalMedcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalMedcardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimalMedcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
