import { Component, inject, OnInit } from '@angular/core';
import { SubjectService } from '../subject-service';

@Component({
  selector: 'app-second-component',
  imports: [],
  templateUrl: './second-component.html',
  styleUrl: './second-component.css',
})
export class SecondComponent implements OnInit {
  subjectService = inject(SubjectService);
  buttonClickedSubject$ = this.subjectService.buttonSubject;

  ngOnInit(): void {
    this.buttonClickedSubject$.subscribe((val) =>{
      console.log("Second component - button clicked " + val + " times.");
    })
  }
}
