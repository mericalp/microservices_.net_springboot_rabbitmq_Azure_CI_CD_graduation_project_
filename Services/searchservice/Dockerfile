# FROM openjdk:17
# COPY ./target/searchservice-0.0.1-SNAPSHOT.jar /app.jar
# ENTRYPOINT ["java", "-jar", "/app.jar"]


# Temel imaj olarak OpenJDK 17 kullanılıyor
FROM openjdk:17

# Uygulamanın JAR dosyasını konteyner içine kopyalayın
COPY ./target/searchservice-0.0.1-SNAPSHOT.jar /app.jar

# Çevre değişkenlerini tanımlayın
ENV CORS_ORIGIN="http://frontend.internal.bluebay-1372140f.australiaeast.azurecontainerapps.io" \
    SPRING_DATA_MONGODB_DATABASE="SearchDb" \
    SPRING_DATA_MONGODB_URI="mongodb://mongodb.internal.bluebay-1372140f.australiaeast.azurecontainerapps.io:27017/SearchDb" \
    SPRING_RABBITMQ_HOST="rabbitmq" \
    SPRING_RABBITMQ_PORT="5672" \
    SPRING_RABBITMQ_USERNAME="guest" \
    SPRING_RABBITMQ_PASSWORD="guest" \
    LOGGING_LEVEL_ORG_SPRINGFRAMEWORK_AMQP="DEBUG" \
    SPRING_JPA_PROPERTIES_HIBERNATE_SHOW_SQL="true" \
    SPRING_JPA_PROPERTIES_HIBERNATE_FORMAT_SQL="true" \
    SPRING_JPA_HIBERNATE_DDL_AUTO="update"

# Uygulamayı başlatmak için ENTRYPOINT kullanın
ENTRYPOINT ["java", "-jar", "/app.jar"]
