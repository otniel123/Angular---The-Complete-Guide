package projetoHttp.places.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import projetoHttp.places.dto.response.PlaceResponse;
import projetoHttp.places.entity.Place;
import projetoHttp.places.service.PlaceService;

import java.net.http.HttpClient;
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

    @GetMapping("/{id}")
    public PlaceResponse findById(@PathVariable Long id){
        return this.placeService.findById(id);
    }

}
