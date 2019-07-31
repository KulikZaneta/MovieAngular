import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieStarWarsComponent } from './movie-star-wars.component';

describe('MovieStarWarsComponent', () => {
  let component: MovieStarWarsComponent;
  let fixture: ComponentFixture<MovieStarWarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieStarWarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieStarWarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
