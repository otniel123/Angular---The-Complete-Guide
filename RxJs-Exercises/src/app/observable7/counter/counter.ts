import { Component, OnInit, signal } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter implements OnInit {
  subject$ = new Subject<number>();
  num = 0;

  ngOnInit(): void {
    setInterval(() => {
      this.subject$.next(this.num);
      this.num++;
    }, 1000)
  }
}
