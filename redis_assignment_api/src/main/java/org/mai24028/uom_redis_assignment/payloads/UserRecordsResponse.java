package org.mai24028.uom_redis_assignment.payloads;

import lombok.AllArgsConstructor;
import lombok.Data;
import org.mai24028.uom_redis_assignment.helper_objects.RecordItem;

import java.util.List;

@Data
@AllArgsConstructor
public class UserRecordsResponse {

    private List<RecordItem> records;

}
