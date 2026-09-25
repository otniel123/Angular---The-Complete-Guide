import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-name-and-counter-component',
  imports: [FormsModule],
  templateUrl: './name-and-counter-component.html',
  styleUrl: './name-and-counter-component.css',
})
export class NameAndCounterComponent {
  count = 0;

  name: string = '';

  incremet(){
    console.log("Increment")
    this.count++;
  }

  get debug(){
    console.log("Template checked")
    return ''
  }
}
