package projetoHttp.places.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import projetoHttp.places.dto.response.PlaceResponse;
import projetoHttp.places.entity.Place;
import projetoHttp.places.factory.PlaceFactory;
import projetoHttp.places.repository.PlaceRepository;

import java.util.List;

@Service
@RequiredArgsConstructor
public class PlaceService {
    private final PlaceRepository placeRepository;

    public List<PlaceResponse> findAll(){

        List<Place> placesList = this.placeRepository.findAll();

        return PlaceFactory.placeResponseListFromPlaceList(placesList);
    }
}
