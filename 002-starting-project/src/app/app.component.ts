import { Component, inject } from '@angular/core';

import { AuthComponent } from './auth/auth.component';
import { LearningResourcesComponent } from './learning-resources/learning-resources.component';
import { AuthService } from './auth/auth.service';
//import { NgIf } from "../../node_modules/@angular/common/index";
import { SafeLinkDirective } from './safe-link.directive';
import { AuthDirective } from "./auth/auth.directive";
import { LogDirective } from './log.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [AuthComponent, LearningResourcesComponent, AuthDirective, LogDirective],
})
export class AppComponent {
  private authService = inject(AuthService);

  isAdmin = (() => this.authService.activePermission() === 'admin');
}
