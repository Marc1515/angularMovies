import { NgModule } from '@angular/core';
import { MoviesComponent } from './movies.component';
import { MoviesRoutingModule } from './movies-routing.module';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';



@NgModule({
  declarations: [
    MoviesComponent
  ],
  imports: [
    MoviesRoutingModule,
    CardModule,
    ButtonModule
    
  ],
})
export class MoviesModule { }
