import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MovieModel } from './models/movie-model';
import { DataService } from '../services/data.service';
import { RegistrationComponent } from "./registration/registration.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RegistrationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  movies: MovieModel[] = [];
  modify: MovieModel | undefined = undefined;
  new: MovieModel | undefined = undefined;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getMovies().subscribe({
      next: (data: MovieModel[]) => {
        this.movies = data;
      },

      error: (err) => console.log(err),
    });
  }

  newReg() {
    this.new = {
      id: undefined,
      title: '',
      director: '',
      rating: 0,
      release_year: 0,
      created_at: '',
      updated_at: '',
      genre_id: 0,
    }
  }

  saveNew(m: MovieModel) {
      this.dataService.addMovie(m).subscribe({
        next: (data: MovieModel) => {
          this.movies.push(data);
          this.new = undefined;
        },

        error: (err) => console.log(err),
      });
  }

  modifyReg(m: MovieModel) {
    this.modify = JSON.parse(JSON.stringify(m));
  }

  saveModify(m: MovieModel) {
    this.dataService.modifyMovie(m).subscribe({
      next: (data: MovieModel) => {
        const index = this.movies.findIndex((m) => m.id == data.id);
        this.movies[index] = data;
        this.modify = undefined;
      },

      error: (err) => console.log(err),
    });
  }

  deleteReg(m: MovieModel) {
        this.dataService.deleteMovie(m).subscribe({
          next: (data: MovieModel) => {
            const index = this.movies.findIndex((m) => m.id == data.id);
            this.movies.splice(index, 1);
            this.modify = undefined;
          },

          error: (err) => console.log(err),
        });
  }
}
