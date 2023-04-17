import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies.component';
import { MoviesRoutingModule } from './movies-routing.module';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { TagModule } from 'primeng/tag';



@NgModule({
  declarations: [
    MoviesComponent,
    MovieDetailComponent
  ],
  imports: [
    MoviesRoutingModule,
    CardModule,
    ButtonModule,
    CommonModule,
    TagModule
  ],
})
export class MoviesModule { }
