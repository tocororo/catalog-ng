import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstititionalRepositoriesViewComponent } from './instititional-repositories-view.component';

describe('InstititionalRepositoriesViewComponent', () => {
  let component: InstititionalRepositoriesViewComponent;
  let fixture: ComponentFixture<InstititionalRepositoriesViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstititionalRepositoriesViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstititionalRepositoriesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
