# Chat Application with User Authentication

A full-stack chat application with real-time messaging, user authentication, and chat rooms.

## Features
- User registration & JWT authentication (placeholder configs included)
- Real-time messaging using WebSockets (STOMP over SockJS)
- Private and group chats (can be extended)
- MySQL database for persistence (update `application.properties` with your DB creds)
- Spring Boot backend + modern responsive frontend

## How to run

### Prerequisites
- Java 17+, Maven, MySQL server

### Setup MySQL
```sql
CREATE DATABASE chat_app;
CREATE USER 'chat_user'@'localhost' IDENTIFIED BY 'strongpassword';
GRANT ALL PRIVILEGES ON chat_app.* TO 'chat_user'@'localhost';
FLUSH PRIVILEGES;
```

Update `backend/src/main/resources/application.properties` with your MySQL username/password.

### Run backend
```
cd backend
mvn spring-boot:run
```

### Run frontend
Open `frontend/index.html` in your browser (or use Live Server).

## Notes
- JWT auth scaffolding is indicated in dependencies; integrate auth service & filters as needed.
- WebSocket STOMP endpoint is `/chat`. Frontend currently uses raw WebSocket for demo. Replace with STOMP client for production.
- Add SSL, password hashing (BCrypt), and validation for production readiness.
