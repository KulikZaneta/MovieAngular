import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeciesStarWarsComponent } from './species-star-wars.component';

describe('SpeciesStarWarsComponent', () => {
  let component: SpeciesStarWarsComponent;
  let fixture: ComponentFixture<SpeciesStarWarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeciesStarWarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeciesStarWarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
