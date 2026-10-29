import { Component, inject, OnInit } from '@angular/core';
import { SubjectService } from '../subject-service';

@Component({
  selector: 'app-first-component',
  imports: [],
  templateUrl: './first-component.html',
  styleUrl: './first-component.css',
})
export class FirstComponent implements OnInit {
  subjectService = inject(SubjectService);

  buttonClickedSubject$ = this.subjectService.buttonSubject;

  ngOnInit(): void {
    this.buttonClickedSubject$.subscribe((val) =>{
      console.log("First component - O botão foi clicado " + val + " vezes")
    })
  }
}
