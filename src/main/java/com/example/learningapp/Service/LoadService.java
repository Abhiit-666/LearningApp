package com.example.learningapp.Service;

import java.util.List;

public interface  LoadService {

    List<Topic> fetchtop();     
    List<Topic> filterfetch(String filter);
}
