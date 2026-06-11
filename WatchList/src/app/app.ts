import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TitleCard } from "./components/title-components/title-card/title-card";
import { TitleForm } from "./components/title-components/title-form/title-form";
import { TitleList } from "./components/title-components/title-list/title-list";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TitleCard, TitleForm, TitleList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('WatchList');
}
