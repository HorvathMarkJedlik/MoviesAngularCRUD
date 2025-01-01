import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MovieModel } from './models/movie-model';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  movies: MovieModel[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(){
    this.dataService.getMovies().subscribe({
      next: (data: MovieModel[]) => {
        this.movies = data;
      },

      error: (err) => console.log(err)

    });
  }

}
