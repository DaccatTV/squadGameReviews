import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchlistComponent } from './searchlist.component';

describe('SearchlistComponent', () => {
  let component: SearchlistComponent;
  let fixture: ComponentFixture<SearchlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
