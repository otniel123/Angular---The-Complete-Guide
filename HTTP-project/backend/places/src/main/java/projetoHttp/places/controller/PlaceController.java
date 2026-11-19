package projetoHttp.places.controller;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import projetoHttp.places.dto.request.PlaceRequest;
import projetoHttp.places.dto.response.PlaceResponse;
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

    @GetMapping("/{id}")
    public PlaceResponse findById(@PathVariable Long id){
        return this.placeService.findById(id);
    }

    @PostMapping
    public PlaceResponse createPlace(@RequestBody @Valid PlaceRequest placeRequest){
        return ResponseEntity.status(201).body(this.placeService.createPlace(placeRequest)).getBody();
    }

    @DeleteMapping("/{id}")
    public void deletePlace(@PathVariable Long id){
        this.placeService.deletePlace(id);
    }

}
