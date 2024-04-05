package com.searchservice.controller;

import com.searchservice.model.Animal;
import com.searchservice.model.SearchParams;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/search")
public class SearchController {
    @Autowired
    private MongoTemplate mongoTemplate;
    
    @GetMapping
    public List<Animal> searchAnimals(SearchParams searchParams) {
        Query query = new Query();
        if (!StringUtils.isEmpty(searchParams.getSearchTerm())) {
            String searchTerm = searchParams.getSearchTerm().trim(); 
            Criteria criteria = new Criteria().orOperator (
                Criteria.where("name").regex(searchTerm, "i"),
                Criteria.where("type").regex(searchTerm, "i"),
                Criteria.where("breed").regex(searchTerm, "i"),
                Criteria.where("description").regex(searchTerm, "i")
            );
            query.addCriteria(criteria);
        }

        if (!StringUtils.isEmpty(searchParams.getFilterBy())) {
            query.addCriteria(Criteria.where("status").is(searchParams.getFilterBy()));
        }

        if (!StringUtils.isEmpty(searchParams.getType())) {
            query.addCriteria(Criteria.where("type").is(searchParams.getType()));
        }

        if (!StringUtils.isEmpty(searchParams.getSex())) {
            query.addCriteria(Criteria.where("sex").is(searchParams.getSex()));
        }

        return mongoTemplate.find(query, Animal.class);
    }
}
