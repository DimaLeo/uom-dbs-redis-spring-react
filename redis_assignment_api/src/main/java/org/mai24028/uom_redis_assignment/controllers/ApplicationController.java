package org.mai24028.uom_redis_assignment.controllers;

import org.mai24028.uom_redis_assignment.helper_objects.RecordItem;
import org.mai24028.uom_redis_assignment.helper_objects.RecordSearchResult;
import org.mai24028.uom_redis_assignment.payloads.*;
import org.mai24028.uom_redis_assignment.repositories.RecordsRepository;
import org.mai24028.uom_redis_assignment.repositories.UserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
public class ApplicationController {

    private final RecordsRepository recordsRepository;
    private final UserRepository userRepository;

    public ApplicationController(RecordsRepository recordsRepository, UserRepository userRepository) {
        this.recordsRepository = recordsRepository;
        this.userRepository = userRepository;
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@RequestBody LoginRequest requestBody){

        try{
            Boolean existingUser = userRepository.userNameExists(requestBody.getUsername());

            if(!existingUser){
                userRepository.storeUser(requestBody.getUsername());
            }

            return new ResponseEntity<>(new LoginResponse(requestBody.getUsername(), !existingUser), HttpStatus.ACCEPTED);

        } catch (Exception e) {
            return new ResponseEntity<>(new LoginResponse("Login failed", e.getMessage()), HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

    @PostMapping("/record")
    public ResponseEntity<NewRecordResponse> newRecord(@RequestBody NewRecordRequest requestBody){

        try{
            RecordSearchResult isExistingRecord = recordsRepository.addRecord(requestBody.getUsername(), requestBody.getRecordName());
            if(isExistingRecord.getRecordExists()){
                return new ResponseEntity<>(new NewRecordResponse("Record already exists",isExistingRecord.getUsername()), HttpStatus.CONFLICT);
            }
            else{
                return new ResponseEntity<>(new NewRecordResponse("Record Successfully added", isExistingRecord.getUsername()), HttpStatus.CREATED);
            }
        }
        catch (Exception e){
            return new ResponseEntity<>(new NewRecordResponse("Failed due to "+e.getMessage()), HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

    @GetMapping("records/{username}")
    public ResponseEntity<UserRecordsResponse> getUserRecords(@PathVariable("username") String username){

        List<RecordItem> records = recordsRepository.findRecordsByUsername(username);

        return new ResponseEntity<>(new UserRecordsResponse(records), HttpStatus.OK);

    }

    @GetMapping("/search")
    public ResponseEntity<RecordSearchResult> searchRecord(@RequestParam("recordName") String recordName){

        RecordSearchResult searchResult = recordsRepository.findRecordByRecordName(recordName);

        return new ResponseEntity<>(searchResult, HttpStatus.OK);
    }

    @GetMapping("/entries-per-user")
    public ResponseEntity<EntriesPerUserResponse> getEntriesPerUser(){

        return new ResponseEntity<>(new EntriesPerUserResponse(recordsRepository.getEntriesPerUser()), HttpStatus.OK);

    }

    @GetMapping("/average-queries")
    public ResponseEntity<AverageQueriesResponse> getAverageQueries(){
        Double avg = recordsRepository.getAverageQueries();
        return new ResponseEntity<>(new AverageQueriesResponse(avg), HttpStatus.OK);
    }

}