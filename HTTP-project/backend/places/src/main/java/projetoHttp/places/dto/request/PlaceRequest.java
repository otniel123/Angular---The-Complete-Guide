package projetoHttp.places.dto.request;

import jakarta.validation.constraints.NotBlank;

import java.time.LocalDateTime;

public record PlaceRequest(
     @NotBlank(message = "O titulo do lugar é obrigatório")
    String title,

    @NotBlank(message = "A descrição do lugar é obrigatória")
    String description,

    String imageUrl,

    @NotBlank(message = "A cidade onde fica o lugar é obrigatória")
    String city,

    String country,

    String categogry,

    LocalDateTime createdAt
) {
}
