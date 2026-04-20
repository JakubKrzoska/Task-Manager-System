
[![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)](https://angular.io/)
[![Java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)](https://www.java.com/)
[![Maven](https://img.shields.io/badge/Maven-C71A36?style=for-the-badge&logo=apache-maven&logoColor=white)](https://maven.apache.org/)

> A straightforward full-stack project created to practice connecting an Angular frontend with a Java backend.

## 📝 Project Description
This is a simple Task Manager system designed to handle basic task entries. The goal of this project was to learn the fundamentals of the full-stack workflow, specifically how to send data from a web interface to a local server.

The project consists of:
* **`task-manager`**: A simple Angular UI for viewing and managing tasks.
* **`quickapp`**: A Java/Maven backend that serves as the API for the task data.

## ✨ Key Features
* **Create Tasks:** Add new items to your list via a simple form.
* **Remove Tasks:** Delete tasks once they are completed.
* **Basic Integration:** Demonstrates basic communication between Angular and Java.

## 🛠️ Technologies Used
* **Frontend:** Angular & TypeScript
* **Backend:** Java & Maven
* **Communication:** REST API (JSON)

## 🧠 What I Learned
* **The Basics of REST:** How to perform simple GET, POST, and DELETE operations.
* **Frontend Services:** Using Angular Services to make HTTP calls to a backend.
* **Project Structure:** How to organize a project that uses two completely different technologies in one place.

## 📷 Screenshot
<img width="1900" height="915" alt="taskmanager" src="https://github.com/user-attachments/assets/36f964a8-ded5-4152-9574-fdfe31adeefc" />

## 🚀 How to Run Locally

### 1. Backend (Java)
1. Go to the `quickapp` folder.
2. Run via your IDE or use Maven:
   ```bash
   mvn spring-boot:run

### 2. Frontend (Angular)
1.  Navigate to `/task-manager`.
2.  Install dependencies: `npm install`.
3.  Start the dev server: `ng serve`.
4.  Open `http://localhost:4200` in your browser.
