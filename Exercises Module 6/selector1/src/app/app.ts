import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HighLightCardComponent } from './high-light-card-component/high-light-card-component';
import { CardComponent } from "./card-component/card-component";
import { ProfileCardComponent } from "./profile-card-component/profile-card-component";
import { Tag } from './tag/tag';
import { StatusBadge } from './status-badge/status-badge';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HighLightCardComponent, CardComponent, ProfileCardComponent, Tag, StatusBadge],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('selector1');
}
