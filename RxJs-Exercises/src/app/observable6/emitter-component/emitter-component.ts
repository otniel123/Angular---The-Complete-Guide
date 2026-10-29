import { Component, inject, signal } from '@angular/core';
import { Subject } from 'rxjs';
import { SubjectService } from '../subject-service';
import { FirstComponent } from '../first-component/first-component';
import { SecondComponent } from '../second-component/second-component';

@Component({
  selector: 'app-emitter-component',
  imports: [FirstComponent, SecondComponent],
  templateUrl: './emitter-component.html',
  styleUrl: './emitter-component.css',
})
export class EmitterComponent {
  subjectService = inject(SubjectService);
  timesButtonClicked = signal(0);
  buttonSubject$ = this.subjectService.buttonSubject;

  onClickButton(){
    this.timesButtonClicked.update(val => val + 1);
    this.buttonSubject$.next(this.timesButtonClicked());
  }
}
