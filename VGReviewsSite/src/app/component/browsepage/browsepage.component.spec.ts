import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowsepageComponent } from './browsepage.component';

describe('BrowsepageComponent', () => {
  let component: BrowsepageComponent;
  let fixture: ComponentFixture<BrowsepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowsepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowsepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
