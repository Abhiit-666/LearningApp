package com.example.learningapp.Service;

import org.springframework.beans.factory.annotation.Autowired;

public class DetailServiceImpl implements DetailService{
@Autowired
private DetailRepository detailRepository;

    public Detail fetchdDetail(String id){
        Detail detail=detailRepository.fetch(id);
        return detail;
    }
    
}
