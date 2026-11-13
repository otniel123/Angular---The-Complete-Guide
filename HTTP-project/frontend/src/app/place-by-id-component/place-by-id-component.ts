import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PlaceService } from '../services/PlaceService';

@Component({
  selector: 'app-place-by-id-component',
  imports: [FormsModule],
  templateUrl: './place-by-id-component.html',
  styleUrl: './place-by-id-component.css',
})
export class PlaceByIdComponent {
  placeService = inject(PlaceService);
  placeId = signal<number | null>(null);
  place = signal<Place | null>(null);

  onClick(){
    console.log(this.placeId())
    this.placeService.getPlaceById(this.placeId()).subscribe({
      next: (place) =>{
       if(place){
        this.place.set(place)
       } 
      },
      error: (err) => {
      console.log(err)
      this.place.set(null)
      alert("Place com o id " + this.placeId() + " não encontrado")
      }
    })
  }
}
