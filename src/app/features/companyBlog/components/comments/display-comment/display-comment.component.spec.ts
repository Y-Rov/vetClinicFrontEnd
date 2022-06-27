import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCommentComponent } from './display-comment.component';

describe('DisplayCommentComponent', () => {
  let component: DisplayCommentComponent;
  let fixture: ComponentFixture<DisplayCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayCommentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
