import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Movie } from '../movie';
import { FavoriteMoviesService } from '../shared/services/favorite-movies.service';

import { FavoriteMovieComponent } from './favorite-movie.component';

let favoriteMoviesToUse: Movie[] = [
  { title: 'Pim' },
  { title: 'Pum' },
  { title: 'Pumba' },
];

describe('FavoriteMovieComponent', () => {
  let component: FavoriteMovieComponent;
  let fixture: ComponentFixture<FavoriteMovieComponent>;
  let favoriteMoviesService: FavoriteMoviesService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FavoriteMovieComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteMovieComponent);
    favoriteMoviesService = TestBed.inject(FavoriteMoviesService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have title', () => {
    expect(component.title).toBeTruthy();
  });
  it('should have in H1 content of title', () => {
    expect(fixture.nativeElement.querySelector('h1').textContent).toContain(
      component.title
    );
  });
  it('Should exist favoriteMovie', () => {
    expect(component.favoriteMovies).toBeTruthy();
  });
  it('Should have elements in favoriteMovie', () => {
    expect(component.favoriteMovies).toBeTruthy();
  });

  it('Should see if favoriteMovie has the same lenght of api', () => {
    component.favoriteMovies = [...favoriteMoviesToUse];
    fixture.detectChanges();
    const movies = fixture.nativeElement.querySelectorAll('.movie');
    expect(movies.length).toEqual(favoriteMoviesToUse.length);
  });
  it('Should show a movie title', () => {
    component.favoriteMovies = [...favoriteMoviesToUse];
    fixture.detectChanges();
    const movies = fixture.nativeElement.querySelectorAll('.movie');
    movies.forEach((e: any, i) => {
      let title = e.innerHTML;
      expect(title).toEqual(favoriteMoviesToUse[i].title);
    });
  });
  describe('GetMovies test', () => {
    beforeEach(() => {
      spyOn(favoriteMoviesService, 'getMovies').and.returnValue(
        of(favoriteMoviesToUse)
      );
    });

    it('should get all Movies', () => {
      fixture.detectChanges();
      expect(favoriteMoviesService.getMovies).toHaveBeenCalled();
    });
  });
});
