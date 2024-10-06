package com.example.learningapp.Repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.example.learningapp.Model.Topic;

@Repository
public class LoadRepository {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Autowired
    private RedisTemplate<String,Integer> redisTemplate;

    private static final String TOPIC_VEIW_KEY_PREFIX = "topic:views";


    public Topic updateViews(String id){

        String redisKey=TOPIC_VEIW_KEY_PREFIX +id;
        redisTemplate.opsForValue().increment(redisKey);
        String sql="Select * from Topics where id=?";
        Topic topic=jdbcTemplate.queryForObject(sql, Topic.class,id);

        Integer redisViewCount=redisTemplate.opsForValue().get(redisKey);
        topic.setView_count(redisViewCount);

        return topic;
    }
    
}
