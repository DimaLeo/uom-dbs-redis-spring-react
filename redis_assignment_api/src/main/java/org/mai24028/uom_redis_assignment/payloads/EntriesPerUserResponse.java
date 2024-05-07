package org.mai24028.uom_redis_assignment.payloads;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.mai24028.uom_redis_assignment.helper_objects.UserEntries;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class EntriesPerUserResponse {
    private List<UserEntries> entries_per_user;
}
