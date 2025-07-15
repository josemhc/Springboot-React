# 🧩 SpringBoot + React: CRUD de Clientes

# En la rama docker se encuentra la aplicación dockerizada

# En esta rama main se encuentra la aplicación en local host

## Correr la aplicación web

## Correr la API REST en Linux

``````
cd demo
./mvnw spring-boot:run -e
``````
## Correr el frontend

``````
cd frontend
npm start
``````

## Base de datos

Se da por hecho que se tiene una base de datos MySQL local, si no es el caso, se puede utilizar el docker compose que esta en el repositorio para crear una base de datos en un contenedor docker, asegurarse que no haya ningun proceso ejecutandose localmente en el puerto 3306

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