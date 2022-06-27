import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditArticleDialogComponent } from './edit-article-dialog.component';

describe('EditArticleDialogComponent', () => {
  let component: EditArticleDialogComponent;
  let fixture: ComponentFixture<EditArticleDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditArticleDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditArticleDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
