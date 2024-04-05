
package com.searchservice.repository;
import com.searchservice.model.Animal;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface AnimalRepository extends MongoRepository<Animal, String> {
}
