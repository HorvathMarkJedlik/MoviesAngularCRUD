import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Output() saved = new EventEmitter<MovieModel>();

  getValue(event: any): string {
    return event.target.value;
  }

  getNumberValue(event: any): number {
    return Number(event.target.value) ;
  }

  save(){
    this.saved.emit(this.model);
  }
}
