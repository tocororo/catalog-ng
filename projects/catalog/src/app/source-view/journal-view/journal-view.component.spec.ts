import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceJournalViewComponent } from './journal-view.component';

describe('JournalViewComponent', () => {
  let component: SourceJournalViewComponent;
  let fixture: ComponentFixture<SourceJournalViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourceJournalViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourceJournalViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
