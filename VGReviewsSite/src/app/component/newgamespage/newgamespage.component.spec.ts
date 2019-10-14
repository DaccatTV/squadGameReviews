import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewgamespageComponent } from './newgamespage.component';

describe('NewgamespageComponent', () => {
  let component: NewgamespageComponent;
  let fixture: ComponentFixture<NewgamespageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewgamespageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewgamespageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
