import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HighLightCardComponent } from './high-light-card-component/high-light-card-component';
import { CardComponent } from "./card-component/card-component";
import { ProfileCardComponent } from "./profile-card-component/profile-card-component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HighLightCardComponent, CardComponent, ProfileCardComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('selector1');
}
