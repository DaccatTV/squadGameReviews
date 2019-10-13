import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminaccountlistComponent } from './adminaccountlist.component';

describe('AdminaccountlistComponent', () => {
  let component: AdminaccountlistComponent;
  let fixture: ComponentFixture<AdminaccountlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminaccountlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminaccountlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
