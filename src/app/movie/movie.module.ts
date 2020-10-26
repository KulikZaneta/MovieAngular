import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from './movie-list/movie-list.component';
import { Routes, RouterModule } from '@angular/router';
import { MovieDbControllerService } from 'src/api/services';
import {MatListModule} from '@angular/material/list';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

const homeRoutes: Routes = [
  {
    path: 'list',
    component: MovieListComponent
  },
  {
    path: ':id',
    component: MovieDetailsComponent
  }
];

@NgModule({
  declarations: [MovieListComponent, MovieDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(homeRoutes),
    MatListModule,
    MatCardModule,
    MatButtonModule
    
  ],
  providers: [MovieDbControllerService],
  exports: [MovieListComponent]
})
export class MovieModule { }



