package org.mai24028.uom_redis_assignment.repositories;
import org.mai24028.uom_redis_assignment.helper_objects.RecordSearchResult;
import org.mai24028.uom_redis_assignment.helper_objects.RecordItem;
import org.mai24028.uom_redis_assignment.helper_objects.UserEntries;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Repository;

import java.text.DecimalFormat;
import java.util.List;
import java.util.Objects;
import java.util.Set;
import java.util.stream.Collectors;

@Repository
public class RecordsRepository {

    private static final String RECORDS_KEY_PREFIX = "records";
    private static final String QUERIES_KEY_PREFIX = "queries";
    private final RedisTemplate<String, String> redisTemplate;

    public RecordsRepository(RedisTemplate<String, String> redisTemplate) {
        this.redisTemplate = redisTemplate;
    }


    public RecordSearchResult recordExists(String recordName) {

        Set<String> keys = redisTemplate.keys("records:*");

        for (String key : keys) {
            if (Boolean.TRUE.equals(redisTemplate.opsForSet().isMember(key, recordName))) {
                return new RecordSearchResult(true, key.split(":")[1]);
            }
        }

        return new RecordSearchResult(false, "");
    }

    public RecordSearchResult addRecord(String username, String recordName) {
        String key = buildRecord(username);

        RecordSearchResult result = recordExists(recordName);

        if(result.getRecordExists()){
            return result;
        }

        redisTemplate.opsForSet().add(key, recordName);
        setQueries(recordName,0);
        return result;
    }

    public void setQueries(String recordName, Integer queries) {
        redisTemplate.opsForValue().set(buildQuery(recordName), String.valueOf(queries));
    }

    public List<RecordItem> findRecordsByUsername(String username) {

        Set<String> recordNames = redisTemplate.opsForSet().members(buildRecord(username));

        return recordNames.stream()
                .map(recordName -> {
                    String queryValue = redisTemplate.opsForValue().get(buildQuery(recordName));
                    if (queryValue != null) {
                        return new RecordItem(recordName, Integer.parseInt(queryValue));
                    } else {
                        return null;
                    }
                })
                .filter(Objects::nonNull) // Filter out null values
                .collect(Collectors.toList());
    }

    public RecordSearchResult findRecordByRecordName(String recordName) {

        Set<String> keys = redisTemplate.keys("records:*");

        for (String key : keys) {
            if (Boolean.TRUE.equals(redisTemplate.opsForSet().isMember(key, recordName))) {
                Integer counter = Integer.parseInt(redisTemplate.opsForValue().get(buildQuery(recordName)));
                redisTemplate.opsForValue().set(buildQuery(recordName), String.valueOf(counter+1));
                return new RecordSearchResult(true, key.split(":")[1]);
            }
        }

        return new RecordSearchResult(false, "");
    }

    public List<UserEntries> getEntriesPerUser() {

        Set<String> keys = redisTemplate.keys("records:*");

        return keys.stream()
                .map(key -> {
                    String username = key.split(":")[1];
                    Integer entries = findRecordsByUsername(username).size();
                    return new UserEntries(username, entries);
                })
                .collect(Collectors.toList());

    }

    public Double getAverageQueries() {
        Set<String> keys = redisTemplate.keys("queries:*");

        int sum = 0;

        for (String key : keys) {
            String value = redisTemplate.opsForValue().get(key);
            if (value != null) {
                sum += Integer.parseInt(value);
            }
        }

        if(!keys.isEmpty() && sum>0){
            return (double) sum /keys.size();
        }
        else return 0.0;

    }

    private String buildRecord(String username) {
        return RECORDS_KEY_PREFIX + ":" + username;
    }

    private String buildQuery(String recordName) {
        return QUERIES_KEY_PREFIX + ":" + recordName;
    }

}
