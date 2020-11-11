import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationPermissionComponent } from './organization-permission.component';

describe('OrganizationPermissionComponent', () => {
  let component: OrganizationPermissionComponent;
  let fixture: ComponentFixture<OrganizationPermissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizationPermissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationPermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
