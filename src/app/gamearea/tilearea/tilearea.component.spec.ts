import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TileareaComponent } from './tilearea.component';

describe('TileareaComponent', () => {
  let component: TileareaComponent;
  let fixture: ComponentFixture<TileareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TileareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TileareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
