import { Component, OnInit } from '@angular/core';
import { filter, map, Observable } from 'rxjs';

@Component({
  selector: 'app-observable5',
  imports: [],
  templateUrl: './observable5.html',
  styleUrl: './observable5.css',
})
export class Observable5 implements OnInit{
  observable$ = new Observable<number>((subscriber) => {
    for(let i = 1; i < 20; i++){
      subscriber.next(i);
    }
  })

  ngOnInit(): void {
    this.observable$.pipe(
      filter(val => val % 2 == 0),
      map(val => Math.pow(val, 2))
    ).subscribe({
      next: (val) => console.log("Observable 5" + val)
    })
  }
}
