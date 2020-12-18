import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Movie } from 'src/app/movie';

@Injectable({
  providedIn: 'root'
})
export class FavoriteMoviesService {

  constructor() { }

  getMovies(): Observable<Movie[]>{
    return of([]);

  }
}
