package org.mai24028.uom_redis_assignment.payloads;

import lombok.Data;

@Data
public class LoginResponse {
    private String username;
    private Boolean newAccount;
    private String errorMessage;
    private String error;

    public LoginResponse(String username, Boolean newAccount) {
        this.username = username;
        this.newAccount = newAccount;
    }

    public LoginResponse(String errorMessage, String error) {
        this.errorMessage = errorMessage;
        this.error = error;
    }
}
