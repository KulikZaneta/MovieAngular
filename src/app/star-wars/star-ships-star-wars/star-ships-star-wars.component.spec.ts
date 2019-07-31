import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarShipsStarWarsComponent } from './star-ships-star-wars.component';

describe('StarShipsStarWarsComponent', () => {
  let component: StarShipsStarWarsComponent;
  let fixture: ComponentFixture<StarShipsStarWarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarShipsStarWarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarShipsStarWarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
