import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclesStarWarsComponent } from './vehicles-star-wars.component';

describe('VehiclesStarWarsComponent', () => {
  let component: VehiclesStarWarsComponent;
  let fixture: ComponentFixture<VehiclesStarWarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehiclesStarWarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiclesStarWarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
