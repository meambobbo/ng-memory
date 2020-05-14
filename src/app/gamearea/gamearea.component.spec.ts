import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameareaComponent } from './gamearea.component';

describe('GameareaComponent', () => {
  let component: GameareaComponent;
  let fixture: ComponentFixture<GameareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
