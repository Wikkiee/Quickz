<div align="center">
  <p>
      <img width="30%" src="https://i.imgur.com/pEESyTQ.png">
  </p>
  <br/>
  
  # QuizkAuth Spring-Boot REST API
  ![License](https://img.shields.io/badge/License-MIT-blue.svg)
</div>



## Table of Contents

- [Overview](#overview)
- [Security Features](#security-features)
- [Authentication and Authorization Flow](#authentication-and-authorization-flow)
- [API Endpoints](#api-endpoints)
  - [Register User](#register-user)
  - [Authenticate User](#authenticate-user)
  - [Test Endpoint](#test-endpoint)
- [Getting Started](#getting-started)
- [Additional Information](#additional-information)
  - [Build Status](#build-status)
  - [License](#license)
  - [Contributing](#contributing)
  - [Contact](#contact)

## Overview

QuizkAuth is a Java Maven-based Spring Boot REST API for robust authentication and authorization. The application integrates seamlessly with Spring modules, including Spring Security, Spring JPA, and utilizes PostgreSQL for efficient data storage. Key dependencies encompass Lombok, JSON Web Token (JWT), and JJWT Jackson.

## Security Features

The core security revolves around a meticulously configured security filter chain. Ingress requests undergo thorough scrutiny, and unauthorized access to routes results in a precise 403 error. Two designated open routes ("/api/v1/auth/register" and "/api/v1/auth/authenticate") facilitate streamlined user registration and login processes.

## Authentication and Authorization Flow

Upon initializing the application, incoming requests traverse a comprehensive security filter. The application adeptly handles encryption and decryption of credentials based on request type. For login requests, it meticulously checks the database for user data, while registration requests securely store encrypted data. Following the completion of these processes, the application generates a JWT containing pertinent information, which is promptly dispatched to the client.

## API Endpoints

### Register User

```http
POST /api/v1/auth/register
```
### Request Body
```bash
{
  "username": "exampleUser",
  "password": "securePassword",
  "email": "user@example.com"
}
```
### Response
```bash
{
  "token": "eyJhbGciOiJIUzI1NiIsIn..."
}
```
### Authenticate User

```http
POST /api/v1/auth/authenticate
```
### Request Body
```bash
{
  "username": "exampleUser",
  "password": "securePassword"
}
```
### Response
```bash
{
  "token": "eyJhbGciOiJIUzI1NiIsIn..."
}
```
### Test Endpoint

```http
GET /api/v1/auth/test
```
### Response
```bash
Hello there
```

## Getting Started

Follow these steps to set up and run QuizkAuth Spring-Boot REST API locally:

1. **Clone the Repository:**
    ```bash
    git clone https://github.com/your-username/quizkauth.git
    ```

2. **Configure Application Properties:**
    Create an `application.properties` file in the `src/main/resources` directory with the provided dummy configurations.
    ```properties
    spring.datasource.driver-class-name=org.postgresql.Driver
    spring.datasource.url=jdbc:postgresql://localhost:5432/quizkauthdb
    spring.datasource.username=postgres
    spring.datasource.password=password
    spring.jpa.hibernate.ddl-auto=update
    spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.PostgreSQLDialect
    spring.jpa.open-in-view=false
    ```
    Customize the values as per your PostgreSQL setup.

3. **Build with Maven:**
    ```bash
    cd quizkauth
    mvn clean install
    ```

4. **Run the Application:**
    ```bash
    mvn spring-boot:run
    ```

    The application will be accessible at [http://localhost:8080](http://localhost:8080).
   
### License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### Contributing
Feel free to contribute! Check out the [Contributing Guidelines](CONTRIBUTING.md) for more information.

### Contact
- Discord: #wikkie
- LinkedIn: [Vignesh Mayilsamy](https://www.linkedin.com/in/vignesh-mayilsamy/)
- Email: wikkiedev@gmail.com
