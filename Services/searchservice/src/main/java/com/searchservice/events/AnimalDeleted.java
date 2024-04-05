package com.searchservice.events;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;


// @Document(collection = "animalDeleted")
public class AnimalDeleted {
    @Id
    @JsonProperty("id")
    private String id;

      // Getter ve setter metodları
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }


}
