package com.searchservice.consumers;
import com.fasterxml.jackson.databind.JsonNode;

import com.searchservice.repository.AnimalRepository;
import com.searchservice.model.Animal;
import com.searchservice.events.AnimalCreated;
import com.searchservice.events.AnimalUpdated;
import com.searchservice.events.AnimalDeleted;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.modelmapper.ModelMapper;
import org.springframework.amqp.core.Message;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class AnimalEventConsumer {
    @Autowired
    private AnimalRepository animalRepository;
    @Autowired
    private ModelMapper modelMapper;
    @Autowired
    private ObjectMapper objectMapper; 

    @RabbitListener(queues = "search-animal-created")
    public void handleAnimalCreated(Message message) {
        try {
            String jsonMessage = new String(message.getBody());
            System.out.println("Received JSON message: " + jsonMessage);

            // JSON mesajındaki "message" anahtarının değerini alma
            JsonNode rootNode = objectMapper.readTree(jsonMessage);
            JsonNode messageNode = rootNode.path("message");

            // "message" anahtarının değerini AnimalCreated nesnesine dönüştürme
            AnimalCreated event = objectMapper.treeToValue(messageNode, AnimalCreated.class);

            System.out.println("Received event: " + event.getName());
            System.out.println("Received event: " + event);
            Animal animal = modelMapper.map(event, Animal.class);
            System.out.println(animal.getName());
            animalRepository.save(animal);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @RabbitListener(queues = "search-animal-updated")
    public void handleAnimalUpdated(Message message) {
        try {
            String jsonMessage = new String(message.getBody());
            System.out.println("Received JSON message: " + jsonMessage);
            JsonNode rootNode = objectMapper.readTree(jsonMessage);
            JsonNode messageNode = rootNode.path("message");
            AnimalUpdated event = objectMapper.treeToValue(messageNode, AnimalUpdated.class);
            System.out.println("Received event: " + event.getId());
            System.out.println("Received event: " + event);
            Animal animal = animalRepository.findById(event.getId())
                            .orElseThrow(() -> new Exception("Animal not found with id: " + event.getId()));
            modelMapper.map(event, animal);
            animalRepository.save(animal);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

        
    @RabbitListener(queues = "search-animal-deleted")
    public void handleAnimalDeleted(Message message) {
        try {
            String jsonMessage = new String(message.getBody());
            System.out.println("Received JSON message: " + jsonMessage);
            JsonNode rootNode = objectMapper.readTree(jsonMessage);
            JsonNode messageNode = rootNode.path("message");
            AnimalDeleted event = objectMapper.treeToValue(messageNode, AnimalDeleted.class);
            System.out.println("Received event: " + event.getId());
            animalRepository.deleteById(event.getId());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

}
