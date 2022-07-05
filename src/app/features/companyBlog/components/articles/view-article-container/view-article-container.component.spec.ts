import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewArticleContainerComponent } from './view-article-container.component';

describe('ViewArticleContainerComponent', () => {
  let component: ViewArticleContainerComponent;
  let fixture: ComponentFixture<ViewArticleContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewArticleContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewArticleContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
