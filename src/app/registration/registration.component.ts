import { Component, Input } from '@angular/core';
import { MovieModel } from '../models/movie-model';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css',
})
export class RegistrationComponent {
  @Input() model: MovieModel | undefined = undefined;

  getValue(event: any): string {
    return event.target.value;
  }

  getNumberValue(event: any): number {
    return Number(event.target.value) ;
  }
}
