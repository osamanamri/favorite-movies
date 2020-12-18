import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Movie } from '../movie';

import { FavoriteMovieComponent } from './favorite-movie.component';

let favoriteMoviesToUse: Movie[] = [{title:'Pim'},{title:'Pum'},{title:'Pumba'}];

describe('FavoriteMovieComponent', () => {
  let component: FavoriteMovieComponent;
  let fixture: ComponentFixture<FavoriteMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoriteMovieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have title', ()=>{
    expect(component.title).toBeTruthy();
  });
  it('should have in H1 content of title', ()=>{
    expect(fixture.nativeElement.querySelector('h1').textContent).toContain(component.title);
  });
  it('Should exist favoriteMovie', ()=>{
    expect(component.favoriteMovies).toBeTruthy();
  });
  it('Should have elements in favoriteMovie', ()=>{
    expect(component.favoriteMovies).toBeTruthy();
  });

  it('Should see if favoriteMovie has the same lenght of api', ()=>{
    component.favoriteMovies = [...favoriteMoviesToUse];
    fixture.detectChanges();
    const movies = fixture.nativeElement.querySelectorAll('.movie');
    expect(movies.length).toEqual(favoriteMoviesToUse.length);

  });


});
