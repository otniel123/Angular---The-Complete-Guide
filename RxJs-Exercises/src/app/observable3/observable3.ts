import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-observable3',
  imports: [],
  templateUrl: './observable3.html',
  styleUrl: './observable3.css',
})
export class Observable3 implements OnInit {
  coldObservable$ = new Observable((subscriber) =>{
    subscriber.next("Iniciando execução Observable");
    subscriber.next(1);
    subscriber.next(2);
  })

  subject$ = new Subject<Number>();
  ngOnInit(): void {
    this.coldObservable$.subscribe({
      next: (valor) => console.log("(Observable) A - " + valor)
    })

    this.coldObservable$.subscribe({
      next: (valor) => console.log("(Observable) B - " + valor)
    })

    this.subject$.subscribe(val => console.log("Subject A - " + val));
    this.subject$.subscribe(val => console.log("Subject B - " + val));
    
    this.subject$.next(1);
    this.subject$.next(2);
    this.subject$.complete();
    this.subject$.next(3);
    this.subject$.subscribe(val => console.log("Subject C - " + val));
    this.subject$.next(4);
  }
}
