package projetoHttp.places.service;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import projetoHttp.places.dto.response.PlaceResponse;
import projetoHttp.places.entity.Place;
import projetoHttp.places.factory.PlaceFactory;
import projetoHttp.places.repository.PlaceRepository;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class PlaceService {
    private final PlaceRepository placeRepository;

    public List<PlaceResponse> findAll(){

        List<Place> placesList = this.placeRepository.findAll();

        return PlaceFactory.placeResponseListFromPlaceList(placesList);
    }

    public PlaceResponse findById(Long id){
        Optional<Place> place = placeRepository.findById(id);

        if(place.isPresent()){
            Place registro = place.get();
            return PlaceFactory.placeResponseFromPlace(registro);
        }else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Place não encontrado");
        }
    }
}
