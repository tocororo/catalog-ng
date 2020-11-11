import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourcePermissionComponent } from './source-permission.component';

describe('SourcePermissionComponent', () => {
  let component: SourcePermissionComponent;
  let fixture: ComponentFixture<SourcePermissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourcePermissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourcePermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
