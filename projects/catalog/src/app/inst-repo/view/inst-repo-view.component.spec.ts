import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstRepoViewComponent } from './inst-repo-view.component';

describe('InstRepoViewComponent', () => {
  let component: InstRepoViewComponent;
  let fixture: ComponentFixture<InstRepoViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstRepoViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstRepoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
