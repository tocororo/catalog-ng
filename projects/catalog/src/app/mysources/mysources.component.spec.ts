import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MySourcesComponent } from './mysources.component';

describe('MysourcesComponent', () => {
  let component: MySourcesComponent;
  let fixture: ComponentFixture<MySourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MySourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MySourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
