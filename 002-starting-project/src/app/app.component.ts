import { Component, inject } from '@angular/core';

import { AuthComponent } from './auth/auth.component';
import { LearningResourcesComponent } from './learning-resources/learning-resources.component';
import { AuthService } from './auth/auth.service';
//import { NgIf } from "../../node_modules/@angular/common/index";
import { SafeLinkDirective } from './safe-link.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [AuthComponent, LearningResourcesComponent, /*NgIf*/],
})
export class AppComponent {
  private authService = inject(AuthService);

  isAdmin = (() => this.authService.activePermission() === 'admin');
}
