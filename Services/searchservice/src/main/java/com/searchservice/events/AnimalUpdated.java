
package com.searchservice.events;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.Data;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

// @Document(collection = "animalUpdated")
@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class AnimalUpdated {

    @Id
    @JsonProperty("id")
    private String id;

    @JsonProperty("publicId")
    private int publicId;

    @JsonProperty("age")
    private int age;

    @JsonProperty("name")
    private String name;

    @JsonProperty("type")
    private String type;

    @JsonProperty("breed")
    private String breed;

    @JsonProperty("sex")
    private String sex;

    @JsonProperty("weight")
    private int weight;

    @JsonProperty("color")
    private String color;

    @JsonProperty("description")
    private String description;

    @JsonProperty("coverImageUrl")
    private String coverImageUrl;

    @JsonProperty("status")
    private String status;

    // Getter ve setter metodları
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    // Diğer getter ve setter metodları aynı şekilde eklenebilir...
}
