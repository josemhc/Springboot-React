# Usar imagen base de Java 17
FROM eclipse-temurin:17

# Crear carpeta para la app
WORKDIR /app

# Copiar el JAR compilado (ajusta el nombre si es distinto)

COPY ./target/demo-0.0.1-SNAPSHOT.jar app.jar

# Comando de ejecución

ENTRYPOINT ["java", "-jar", "app.jar"]