import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeoplesStarWarsComponent } from './peoples-star-wars.component';

describe('PeoplesStarWarsComponent', () => {
  let component: PeoplesStarWarsComponent;
  let fixture: ComponentFixture<PeoplesStarWarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeoplesStarWarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeoplesStarWarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
