import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstititionalRepositoriesEditComponent } from './instititional-repositories-edit.component';

describe('InstititionalRepositoriesEditComponent', () => {
  let component: InstititionalRepositoriesEditComponent;
  let fixture: ComponentFixture<InstititionalRepositoriesEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstititionalRepositoriesEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstititionalRepositoriesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
