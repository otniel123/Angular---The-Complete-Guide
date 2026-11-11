package projetoHttp.places.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import projetoHttp.places.entity.Place;

public interface PlaceRepository extends JpaRepository<Place, Long> {
}
