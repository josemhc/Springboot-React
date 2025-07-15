# 🧩 SpringBoot + React: CRUD de Clientes ( App Dockerizada )

## Correr la aplicacion web en docker

### Compila el backend (Spring Boot):

``````
cd demo
``````
En Linux
``````
./mvnw clean package -DskipTests
``````
En Windows
``````
mvnw.cmd clean package -DskipTests
``````

Asegurarse de que se haya generado target/demo-0.0.1-SNAPSHOT.jar

En la raiz del proyecto ejecutar"

``````
docker compose up --build
``````

## Este proyecto es una aplicación **full stack** que implementa un CRUD de clientes usando:

- ⚙️ **Spring Boot 3.5.3** con Maven
- 🧠 **MySQL** como base de datos
- ⚛️ **React** (Vite + React Hook Form)
- 🐳 **Docker & Docker Compose** para levantar todo el entorno

---

## 🚀 Características

- Crear, listar y mostrar clientes
- Validación de formularios en React
- Persistencia con JPA/Hibernate
- Comunicación entre frontend y backend vía API REST
- Base de datos inicializada con Docker