package com.example.learningapp.Configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.redis.connection.RedisConnectionFactory;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.serializer.GenericToStringSerializer;

@Configuration
public class RedisConfig {
    
    @Bean
    public RedisTemplate<String,Integer> redisTemplate(RedisConnectionFactory redisConnectionFactory){
        RedisTemplate<String,Integer> redisTemplate=new RedisTemplate<>();
        redisTemplate.setConnectionFactory(redisConnectionFactory);
        redisTemplate.setValueSerializer(new GenericToStringSerializer(Object.class));
        return redisTemplate;
    }
}
