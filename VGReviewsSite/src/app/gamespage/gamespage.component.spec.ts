import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamespageComponent } from './gamespage.component';

describe('GamespageComponent', () => {
  let component: GamespageComponent;
  let fixture: ComponentFixture<GamespageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamespageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamespageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
