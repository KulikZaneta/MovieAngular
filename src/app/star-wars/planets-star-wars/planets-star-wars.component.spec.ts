import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetsStarWarsComponent } from './planets-star-wars.component';

describe('PlanetsStarWarsComponent', () => {
  let component: PlanetsStarWarsComponent;
  let fixture: ComponentFixture<PlanetsStarWarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanetsStarWarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetsStarWarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
