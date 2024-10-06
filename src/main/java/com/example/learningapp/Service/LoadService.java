package com.example.learningapp.Service;

import java.util.List;

import com.example.learningapp.Model.Topic;

public interface  LoadService {

    List<Topic> fetchtop();     
    List<Topic> filterfetch(String filter);
    Topic updateViews(String id);
}
