package projetoHttp.places.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import projetoHttp.places.dto.response.PlaceResponse;
import projetoHttp.places.entity.Place;
import projetoHttp.places.service.PlaceService;

import java.util.List;

@RestController
@RequestMapping("/api/places")
@RequiredArgsConstructor
public class PlaceController {

    private final PlaceService placeService;

    @GetMapping()
    public List<PlaceResponse> findAll(){
        return this.placeService.findAll();
    }
}
