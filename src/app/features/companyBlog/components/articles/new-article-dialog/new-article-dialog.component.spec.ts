import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewArticleDialogComponent } from './new-article-dialog.component';

describe('NewArticleDialogComponent', () => {
  let component: NewArticleDialogComponent;
  let fixture: ComponentFixture<NewArticleDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewArticleDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewArticleDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
