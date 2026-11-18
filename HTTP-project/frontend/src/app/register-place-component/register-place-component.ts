import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PlaceService } from '../services/PlaceService';

@Component({
  selector: 'app-register-place-component',
  imports: [FormsModule],
  templateUrl: './register-place-component.html',
  styleUrl: './register-place-component.css',
})
export class RegisterPlaceComponent {
  private placeService = inject(PlaceService);

  placeTitle = signal<String>('');
  placeDescription = signal<String>('');
  imagePlaceUrl = signal<String>('');
  placeCity = signal<String>('');
  placeCountry = signal<String>('');
  placeCategory = signal<String>('');
  placeCreationDate = new Date();

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

    const obs = this.placeService.createPlace(placeRequest);
    obs.subscribe({
      next: (res) => console.log("Dentro do next " + res),
      error: (err) => console.log(err)
    });
  }
}
