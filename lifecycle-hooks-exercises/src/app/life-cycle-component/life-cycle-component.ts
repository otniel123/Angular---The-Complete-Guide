import { Component, OnChanges, OnDestroy, OnInit, AfterViewInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, SimpleChanges, } from '@angular/core';

@Component({
  selector: 'app-life-cycle-component',
  imports: [],
  templateUrl: './life-cycle-component.html',
  styleUrl: './life-cycle-component.css',
})
export class LifeCycleComponent implements 
OnInit, 
OnDestroy,
OnChanges,
AfterViewInit,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewChecked {

  ngOnInit(): void {
    console.log("Dentro do onInit");
  }
  ngOnDestroy(): void {
    console.log("Dentro do onDestroy");
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("Dentro do onChanges");
  }
  ngAfterViewInit(): void {
    console.log("Dentro do afterViewInit");
  }
  ngDoCheck(): void {
    console.log("Dentro do doCheck");
  }
  ngAfterContentInit(): void {
    console.log("Dentro do afterContentInit");
  }
  ngAfterContentChecked(): void {
    console.log("Dentro do afterContentChecked");
  }
  ngAfterViewChecked(): void {
    console.log("Dentro do afterViewChecked");
  }

}
