package com.example.learningapp.Controller;

import org.hibernate.boot.internal.DefaultSessionFactoryBuilderService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController("/api/details")
public class DetailsController {
    
    @GetMapping("/fetch/{id}")
    public Detail fetchdetail(@PathVariable("id")String id){
        Detail detail=detailService.fetch(String id);
        return detail;
    }
}
