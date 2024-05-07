package org.mai24028.uom_redis_assignment.repositories;

import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class UserRepository {

    private static final String USER_KEY_PREFIX = "users";
    private final RedisTemplate<String, String> redisTemplate;

    public UserRepository(RedisTemplate<String, String> redisTemplate) {
        this.redisTemplate = redisTemplate;
    }

    public Boolean userNameExists(String username) throws Exception {

        try{
            return redisTemplate.opsForSet().isMember(USER_KEY_PREFIX, username);
        }
        catch (Exception e){
            throw new Exception("Error in checking if user exists");
        }

    }

    public void storeUser(String username) throws Exception {
        try{
            redisTemplate.opsForSet().add(USER_KEY_PREFIX, username);
        }
        catch (Exception e){
            throw new Exception("Error in storing user");
        }
    }
}
