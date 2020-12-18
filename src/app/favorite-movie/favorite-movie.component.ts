import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { FavoriteMoviesService } from '../shared/services/favorite-movies.service';

@Component({
  selector: 'app-favorite-movie',
  templateUrl: './favorite-movie.component.html',
  styleUrls: ['./favorite-movie.component.scss']
})
export class FavoriteMovieComponent implements OnInit {

  title: string;
  favoriteMovies: Movie[];
  constructor(private favoriteMovieService: FavoriteMoviesService) { }

  ngOnInit(): void {
    this.title = 'h';
    this.favoriteMovies = [];
    this.favoriteMovieService.getMovies().subscribe(data=>this.favoriteMovies=data);

  }

}
