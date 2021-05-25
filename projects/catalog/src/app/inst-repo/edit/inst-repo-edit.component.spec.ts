import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstRepoEditComponent } from './inst-repo-edit.component';

describe('InstRepoEditComponent', () => {
  let component: InstRepoEditComponent;
  let fixture: ComponentFixture<InstRepoEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstRepoEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstRepoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
