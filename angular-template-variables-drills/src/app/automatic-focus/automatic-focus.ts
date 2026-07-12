import { AfterViewInit, Component, ElementRef, viewChild } from '@angular/core';

@Component({
  selector: 'app-automatic-focus',
  imports: [],
  templateUrl: './automatic-focus.html',
  styleUrl: './automatic-focus.css',
})
export class AutomaticFocus implements AfterViewInit {
  inputName = viewChild<ElementRef<HTMLInputElement>>('inputName');

  ngAfterViewInit(): void {
    this.inputName()?.nativeElement.focus();
  }

}
