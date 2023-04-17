import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { MovieDetailModel } from 'src/app/model/movieDetail.model';
import { ApiService } from 'src/app/services/api.service';
import { ConstantUri } from 'src/app/utils/constantUri';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent {

  movie!: MovieDetailModel.MovieDetail
  readonly imgBaseUrl = ConstantUri.pathImg;

  constructor(
    private readonly apiService: ApiService<any>,
    private readonly activeRoute: ActivatedRoute,
    private readonly router: Router,
  ) {}

  ngOnInit(): void {
    this.activeRoute.params.subscribe((val: any) => {
      this.getMoviesList(val.id)
    })
  }

  private getMoviesList(movieId: string) {
    const getConfig ={url: ConstantUri.movieDetail + '/' + movieId, params: {api_key: ConstantUri.apiKey}}
    this.apiService.getService(getConfig).subscribe(val => {
      this.movie = val;
    })
  }

  goBack() {
    this.router.navigate(['/populares'])
  }


}
