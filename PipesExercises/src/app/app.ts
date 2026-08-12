import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NativePipes } from './native-pipes/native-pipes';
import { SimpleCustomPipes } from './simple-custom-pipes/simple-custom-pipes';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NativePipes, SimpleCustomPipes],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('PipesExercises');

}
