package com.example.learningapp.Controller;

import java.util.logging.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.slf4j.*;

import java.util.*;

@RestController("api/load")
public class OnLoadController {

    private static final Logger logger= Logger.getLogger(OnLoadController.class.getName());
    
    @Autowired
    private LoadService loadService;

    @GetMapping("/fetch_top")
    public ResponseEntity<List<Topic>> fetchtop(){
        logger.info("Fetching the Info");
        try{
        List<Topic> topics=loadService.fetchtop();
            logger.info("Data fetched");
        }catch(Exception e){
            logger.error("Error while loading data: "+e);
        }
        return ResponseEntity.ok(topics);
    }

    @GetMapping("/filter-fetch/{filter}")
    public ResponseEntity<List<Topic>> filterfetch(@PathVariable("filter") String filter){
        List<Topic> topics= loadService.fetchbyfilter(filter);
        return ResponseEntity.ok(topics);
    }
}
