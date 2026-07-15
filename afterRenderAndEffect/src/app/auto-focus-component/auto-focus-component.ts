import { AfterViewInit, Component, ElementRef, viewChild } from '@angular/core';

@Component({
  selector: 'app-auto-focus-component',
  imports: [],
  templateUrl: './auto-focus-component.html',
  styleUrl: './auto-focus-component.css',
})
export class AutoFocusComponent implements AfterViewInit {
  input = viewChild.required<ElementRef<HTMLInputElement>>('inputView');

  ngAfterViewInit(): void {
    this.input().nativeElement.focus();
  }

  onClickButton(){
    this.input().nativeElement.value = '';
    this.input().nativeElement.focus();
  }
}
