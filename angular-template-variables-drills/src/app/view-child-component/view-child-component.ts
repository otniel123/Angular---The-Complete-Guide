import { Component, ElementRef, viewChild, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-view-child-component',
  imports: [FormsModule],
  templateUrl: './view-child-component.html',
  styleUrl: './view-child-component.css',
})
export class ViewChildComponent {
  inputName = viewChild.required<ElementRef<HTMLInputElement>>('inputName');

  onSubmit(){
    console.log(this.inputName().nativeElement.value);
  }
}
