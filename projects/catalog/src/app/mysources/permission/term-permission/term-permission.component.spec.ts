import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermPermissionComponent } from './term-permission.component';

describe('TermPermissionComponent', () => {
  let component: TermPermissionComponent;
  let fixture: ComponentFixture<TermPermissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermPermissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermPermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
