package org.mai24028.uom_redis_assignment.helper_objects;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class RecordSearchResult {
    private Boolean recordExists;
    private String username;
}
