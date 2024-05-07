# To run with Docker:

## Pre-requisites:
- Docker

## Backend:
Make sure that you do not have a redis server running on the same port as the one in the docker-compose file. If you do, you can change the port in the docker-compose file.
- Navigate to ./redis_assignment_api/src/main/resources/application.properties and change the following properties to match your redis database:
- change the spring.redis.port to the desired port (default 6379)
- run command : `docker-compose up --build`
- the UI should be accessible at http://localhost:3030
- the api should be accessible at http://localhost:8080

# To run without Docker:

## Pre-requisites:
- Java 17
- Maven
- Node latest
- Redis

## Backend:
- Setup redis database. I used port 6379 and db name 0 which are the defaults when creating a new database
- Navigate to ./redis_assignment_api/src/main/resources/application.properties and change the following properties to match your redis database:
  - spring.redis.host -> localhost (to run locally)
  - spring.redis.port
  - spring.redis.database
- run command : `./mvnw spring-boot:run`
- the api should be accessible at http://localhost:8080

## Frontend:
- Navigate to ./redis_assignment_ui
- run command : `npm install`
- run command : `npm run dev`
- the UI should be accessible at http://localhost:3030
