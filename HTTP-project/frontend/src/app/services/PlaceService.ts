import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlaceService {

  private http = inject(HttpClient);

  private apiUrl = 'http://localhost:8080/api/places'
  
  getPlaces(): Observable<Place[]>{
    return this.http.get<Place[]>(this.apiUrl);
  }

  getPlaceById(id: number | null){
    return this.http.get<Place>(this.apiUrl + "/" + id);
  }

  createPlace(placeRequest: PlaceRequest){
    console.log("Dentro do create place do service")
    console.log(JSON.stringify(placeRequest, null, 2));
    return this.http.post<PlaceRequest>(this.apiUrl, placeRequest);
  }

  deletePlace(id: number){
    console.log("ID do lugar: " + id)
    return this.http.delete(this.apiUrl + "/" + id);
  }
}
