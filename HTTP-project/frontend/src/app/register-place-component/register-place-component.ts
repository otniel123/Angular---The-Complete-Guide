import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register-place-component',
  imports: [FormsModule],
  templateUrl: './register-place-component.html',
  styleUrl: './register-place-component.css',
})
export class RegisterPlaceComponent {
  placeTitle = signal<String>('');
  placeDescription = signal<String>('');
  imagePlaceUrl = signal<String>('');
  placeCity = signal<String>('');
  placeCountry = signal<String>('');
  placeCategory = signal<String>('');
  placeCreationDate = new Date;

  createPlace(){
    const placeRequest: PlaceRequest ={
      title: this.placeTitle(),
      description: this.placeDescription(),
      imageUrl: this.imagePlaceUrl(),
      city: this.placeCity(),
      country: this.placeCountry(),
      category: this.placeCategory(),
      createdAt: this.placeCreationDate
    }
  }
}
