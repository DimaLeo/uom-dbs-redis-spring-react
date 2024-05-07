# Stage 1: Build the application with Maven
FROM maven:3.9.5-eclipse-temurin-17 AS build
COPY . .
RUN mvn -f pom.xml clean package

# Stage 2: Create a lightweight image with the JAR file
FROM eclipse-temurin:17
WORKDIR /
COPY --from=build ./target/uom_redis_*.jar app.jar
EXPOSE 8080
CMD ["java", "-jar", "app.jar"]