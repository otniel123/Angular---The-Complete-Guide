import { Component, inject, signal } from '@angular/core';
import { PlaceService } from '../services/PlaceService';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-delete-place-component',
  imports: [FormsModule],
  templateUrl: './delete-place-component.html',
  styleUrl: './delete-place-component.css',
})
export class DeletePlaceComponent {
  placeService = inject(PlaceService);
  idPlace = signal<number>(0);

  onSubmit(){
    const deletePlace = this.placeService.deletePlace(this.idPlace())

    console.log("Id do place dentro do submit: " + this.idPlace())
    deletePlace.subscribe({
      next: () => console.log("Lugar de id " + this.idPlace() + " deletado com sucesso"),
      error: (error) => console.error("Erro ao deletar lugar: " + error)
    })
  }
}
