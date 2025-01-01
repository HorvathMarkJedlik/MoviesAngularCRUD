import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MovieModel } from '../app/models/movie-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  url = 'http://localhost:3000/movies';
  constructor(private http: HttpClient) {}

  getMovies(): Observable<MovieModel[]> {
    return this.http.get<MovieModel[]>(this.url);
  }

  addMovie(reg: MovieModel): Observable<MovieModel> {
    return this.http.post<MovieModel>(this.url, reg);
  }

  modifyMovie(reg: MovieModel): Observable<MovieModel> {
    return this.http.put<MovieModel>(`${this.url}/${reg.id}`, reg);
  }

  deleteMovie(reg: MovieModel): Observable<MovieModel> {
    return this.http.delete<MovieModel>(`${this.url}/${reg.id}`);
  }
}
