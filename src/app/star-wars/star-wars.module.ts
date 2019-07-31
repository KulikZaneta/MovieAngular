import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieStarWarsComponent } from './movie-star-wars/movie-star-wars.component';
import { Routes, RouterModule } from '@angular/router';
import { RapidControllerService } from 'src/api/services';
import { MatListModule } from '@angular/material';
import { PeoplesStarWarsComponent } from './peoples-star-wars/peoples-star-wars.component';
import { PlanetsStarWarsComponent } from './planets-star-wars/planets-star-wars.component';
import { VehiclesStarWarsComponent } from './vehicles-star-wars/vehicles-star-wars.component';
import { StarShipsStarWarsComponent } from './star-ships-star-wars/star-ships-star-wars.component';
import { SpeciesStarWarsComponent } from './species-star-wars/species-star-wars.component';

const homeRoutes: Routes = [{
  path: 'star-wars', children: [
  {
    path: 'movie',
    component: MovieStarWarsComponent
  },{
    path: 'peoples',
    component: PeoplesStarWarsComponent
  },
  {
    path: 'planets',
    component: PlanetsStarWarsComponent
  },
  {
    path: 'vehicles',
    component: VehiclesStarWarsComponent
  },
  {
    path: 'star-ships',
    component: StarShipsStarWarsComponent
  },
  {
    path: 'species',
    component: SpeciesStarWarsComponent
  }
]}];


@NgModule({
  declarations: [MovieStarWarsComponent, PeoplesStarWarsComponent, PlanetsStarWarsComponent, VehiclesStarWarsComponent, StarShipsStarWarsComponent, SpeciesStarWarsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(homeRoutes),
    MatListModule
  ],
  providers: [RapidControllerService]
})
export class StarWarsModule { }
