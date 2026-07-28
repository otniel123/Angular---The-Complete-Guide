import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-full-name-exercise',
  imports: [FormsModule],
  templateUrl: './full-name-exercise.html',
  styleUrl: './full-name-exercise.css',
})
export class FullNameExercise {
  firstName = signal('');
  lastName = signal('');

  fullName = computed(() =>{
    return this.firstName() + ' ' + this.lastName()
  });

  onClickButton(){
    alert(this.fullName());
  }
}
