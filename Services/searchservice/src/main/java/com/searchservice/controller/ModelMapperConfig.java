
package com.searchservice.controller;

import com.searchservice.events.AnimalCreated;
import com.searchservice.events.AnimalUpdated;
import com.searchservice.model.Animal;
import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ModelMapperConfig {
    @Bean
    public ModelMapper modelMapper() {
        ModelMapper modelMapper = new ModelMapper();
        // Event sınıflarınızı Animal sınıfınıza dönüştürmek için gerekli yapılandırmalar
        modelMapper.createTypeMap(AnimalCreated.class, Animal.class);;
        modelMapper.createTypeMap(AnimalUpdated.class, Animal.class);
        return modelMapper;
    }
}