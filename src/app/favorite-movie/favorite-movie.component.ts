import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';

@Component({
  selector: 'app-favorite-movie',
  templateUrl: './favorite-movie.component.html',
  styleUrls: ['./favorite-movie.component.scss']
})
export class FavoriteMovieComponent implements OnInit {

  title: string;
  favoriteMovies: Movie[];
  constructor() { }

  ngOnInit(): void {
    this.title = 'h';
    this.favoriteMovies = [];

  }

}
