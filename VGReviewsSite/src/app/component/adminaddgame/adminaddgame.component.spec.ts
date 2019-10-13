import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminaddgameComponent } from './adminaddgame.component';

describe('AdminaddgameComponent', () => {
  let component: AdminaddgameComponent;
  let fixture: ComponentFixture<AdminaddgameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminaddgameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminaddgameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
