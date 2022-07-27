import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailingWriteComponent } from './mailing-write.component';

describe('MailingWriteComponent', () => {
  let component: MailingWriteComponent;
  let fixture: ComponentFixture<MailingWriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MailingWriteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MailingWriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
