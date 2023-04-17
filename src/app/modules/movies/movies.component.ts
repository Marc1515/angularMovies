import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesModel } from 'src/app/model/movies.model';
import { ApiService } from 'src/app/services/api.service';
import { ConstantUri } from 'src/app/utils/constantUri';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent {


  movies: MoviesModel.MoviesResponse = {
    page: 1,
    results: [],
    total_pages: 0,
    total_results: 0,
  }


  imgBaseUrl = ConstantUri.pathImg

  constructor(
    private readonly apiService: ApiService<any>,
    private readonly router: Router
  ) {}


  ngOnInit(): void {
    const getConfig = { url: ConstantUri.popularMovies, params: {api_key: ConstantUri.apiKey} }
    this.apiService.getService(getConfig).subscribe(val => {
      /* console.log(val.results) */
      this.movies = val
    })
  }


  seeDetail(id: number) {
    this.router.navigate([`populares/detalle/${id}`])
    
  }

}
