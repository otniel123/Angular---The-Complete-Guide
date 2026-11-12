import { Component, inject, OnInit, signal } from '@angular/core';
import { PlaceService } from '../services/PlaceService';

@Component({
  selector: 'app-place-component',
  imports: [],
  templateUrl: './place-component.html',
  styleUrl: './place-component.css',
})
export class PlaceComponent implements OnInit {
  
  places = signal<Place[]>([]);

  private placeService = inject(PlaceService);

  ngOnInit(): void {
    this.placeService.getPlaces().subscribe({
      next: (response) => {
        this.places.set(response);
      },
      error: (error) =>{
        console.error(error);
      }
    })
  }
}
