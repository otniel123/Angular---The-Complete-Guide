import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { Observable3 } from './observable3/observable3';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Observable3],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  observableCounter = signal(0);
  ngOnInit(): void {
      const sub1 = this.firstObservable$.subscribe({
      next: (valor) => console.log(valor),
      complete: () => console.log("FIRST OBSERVABLE COMPLETED"),
      error: (err) => console.error(err)
    })

    const sub2 = this.firstObservable$.subscribe({
      next: (valor) => console.log(valor + " - Subscriber 2"),
      complete: () => console.log("FIRST OBSERVABLE COMPLETED - Subscriber 2"),
      error: (err) => console.error(err)
    })

    setInterval(() =>{
      sub2.unsubscribe()
    }, 3000)
    
  }
  firstObservable$ = new Observable((subscriber) => {
    const intervalId = setInterval(() =>{
      if(this.observableCounter()>10){
        subscriber.complete();
        clearInterval(intervalId);
      }
      subscriber.next(this.observableCounter());
      this.observableCounter.set(this.observableCounter() + 1);
    }, 2000)
    
    return () => clearInterval(intervalId)
  });


}
