import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Validator } from './components/validator/validator';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Validator],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('proyecto-avalon');
}
