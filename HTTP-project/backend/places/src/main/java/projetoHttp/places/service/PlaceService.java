package projetoHttp.places.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import projetoHttp.places.entity.Place;
import projetoHttp.places.repository.PlaceRepository;

import java.util.List;

@Service
@RequiredArgsConstructor
public class PlaceService {
    private final PlaceRepository placeRepository;

    public List<Place> findAll(){
        return this.placeRepository.findAll();
    }
}
