import { Component } from '@angular/core';

@Component({
  selector: 'app-name-component',
  imports: [],
  templateUrl: './name-component.html',
  styleUrl: './name-component.css',
})
export class NameComponent {
  name = 'Otniel';

  changeName(){
    this.name = 'João';
  }

  changeToSameName(){
    this.name = 'João'
  }

  get nameWithLog() {
    console.log('checking name');
    return this.name;
  }

}
