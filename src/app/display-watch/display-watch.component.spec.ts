import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayWatchComponent } from './display-watch.component';

describe('DisplayWatchComponent', () => {
  let component: DisplayWatchComponent;
  let fixture: ComponentFixture<DisplayWatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayWatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayWatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
