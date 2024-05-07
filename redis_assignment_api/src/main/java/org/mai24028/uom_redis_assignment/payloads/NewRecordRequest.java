package org.mai24028.uom_redis_assignment.payloads;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class NewRecordRequest {

    private String recordName;
    private String username;

}
