import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TitleCard } from "./components/title-components/title-card/title-card";
import { TitleForm } from "./components/title-components/title-form/title-form";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TitleCard, TitleForm],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('WatchList');
}
