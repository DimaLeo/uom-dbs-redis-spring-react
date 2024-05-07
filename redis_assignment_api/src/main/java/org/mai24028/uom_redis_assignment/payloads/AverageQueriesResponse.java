package org.mai24028.uom_redis_assignment.payloads;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AverageQueriesResponse {
    private String averageQueries;

    public AverageQueriesResponse(Double averageQueries) {
        this.averageQueries = String.format("%.2f", averageQueries);
    }
}
