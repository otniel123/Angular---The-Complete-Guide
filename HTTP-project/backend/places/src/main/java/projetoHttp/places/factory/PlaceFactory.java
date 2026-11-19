package projetoHttp.places.factory;

import projetoHttp.places.PlacesApplication;
import projetoHttp.places.dto.request.PlaceRequest;
import projetoHttp.places.dto.response.PlaceResponse;
import projetoHttp.places.entity.Place;

import java.util.ArrayList;
import java.util.List;

public class PlaceFactory {

    public static List<PlaceResponse> placeResponseListFromPlaceList(List<Place> placeList){
        List<PlaceResponse> placeResponseList = new ArrayList<>();

        for (Place p : placeList){
            PlaceResponse placeResponse = new PlaceResponse(p.getId(), p.getTitle(),
                    p.getDescription(), p.getImageUrl(), p.getCity(), p.getCountry(),
                    p.getCategory(), p.getCreatedAt());
            placeResponseList.add(placeResponse);
        }
        return placeResponseList;
    }

    public static PlaceResponse placeResponseFromPlace(Place place){
        PlaceResponse placeResponse = new PlaceResponse(place.getId(), place.getTitle(),
                place.getDescription(), place.getImageUrl(), place.getCity(), place.getCountry(),
                place.getCategory(), place.getCreatedAt());
        return placeResponse;
    }

    public static Place placeFromPlaceRequest(PlaceRequest placeRequest){
        Place place = new Place();

        place.setTitle(placeRequest.title());
        place.setDescription(placeRequest.description());
        place.setImageUrl(placeRequest.imageUrl());
        place.setCity(placeRequest.city());
        place.setCountry(placeRequest.country());
        place.setCategory(placeRequest.category());
        place.setCreatedAt(placeRequest.createdAt());
        return place;
    }

    public static Place placeFromPlaceResponse(PlaceResponse placeResponse){
        Place place = new Place();

        place.setId(placeResponse.id());
        place.setTitle(placeResponse.title());
        place.setDescription(placeResponse.description());
        place.setImageUrl(placeResponse.imageUrl());
        place.setCity(placeResponse.city());
        place.setCountry(placeResponse.country());
        place.setCategory(placeResponse.category());
        place.setCreatedAt(placeResponse.createdAt());
        return place;
    }
}
