package com.example.learningapp.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;



public class LoadServiceImpl implements LoadService{
    @Autowired
    private LoadRepository loadRepository;

    
    @Override
    public List<Topic> fetchtop(){
        return List.of();
    }

    @Override
    public List<Topic> filterfetch(String filter){
        return List.of();
    }
}