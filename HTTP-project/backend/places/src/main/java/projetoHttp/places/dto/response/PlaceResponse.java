package projetoHttp.places.dto.response;

import java.time.LocalDateTime;

public record PlaceResponse(
        Long id,
        String title,
        String description,
        String imageUrl,
        String city,
        String country,
        String category,
        LocalDateTime createdAt
) {
}
