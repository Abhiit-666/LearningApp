package com.example.learningapp.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.example.learningapp.Model.Topic;



public class LoadServiceImpl implements LoadService{

    @Autowired
    private LoadRepository loadRepository;
    
    
    @Override
    public List<Topic> fetchtop(){
        return List.of();
    }

    @Override
    public List<Topic> filterfetch(String filter){

        switch(filter){
            //for the view count we have to write the logic mostly in 
            //the front end.  
            case "Most Viewed":

            break;
            case "Hardest to Easiest":
                //fetch the topics from the db in desc order. 
            break;
            case "Easiest to Hardest":
                //fetch the topics from the db in desc order. 
            break;

        }
        return List.of();
    }

    @Override
    public Topic updateViews(String id){
        Topic topic=loadRepository.updateViews(String id);
        return topic;
        // String sql="Select view_count from Topics where id=?";
        // Long count= JdbcTemplate.queryforObject(sql,Long.class,id);

    }
}