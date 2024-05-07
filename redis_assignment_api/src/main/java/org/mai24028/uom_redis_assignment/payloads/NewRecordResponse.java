package org.mai24028.uom_redis_assignment.payloads;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class NewRecordResponse {
    private String result;
    private String existsUnderUsername;
    private String errorMessage;

    public NewRecordResponse(String errorMessage) {
        this.errorMessage = errorMessage;
    }

    public NewRecordResponse(String result, String existsUnderUsername) {
        this.result = result;
        this.existsUnderUsername = existsUnderUsername;
    }
};
