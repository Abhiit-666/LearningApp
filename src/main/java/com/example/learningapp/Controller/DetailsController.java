package com.example.learningapp.Controller;

import org.hibernate.boot.internal.DefaultSessionFactoryBuilderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.example.learningapp.Service.LoadService;

@RestController("/api/details")
public class DetailsController {
    @Autowired
    private LoadService loadService;

    @GetMapping("/fetch/{id}")
    public Detail fetchdetail(@PathVariable("id")String id){
        Detail detail=detailService.fetch(String id);
        return detail;
    }
    @PostMapping("/updateViews/{id}")
    public ResponseEntity<Topic> updateviews(@PathVariable("id") String id){
        Topic topic=loadService.updateViews(id);
        return ResponseEntity.ok(topic);
    }
}
