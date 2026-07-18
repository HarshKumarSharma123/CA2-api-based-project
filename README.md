#Project Submission REST API

## Overview

This project is a RESTful API developed using **Node.js**, **Express.js**, and **MongoDB** for managing student project submissions. It supports CRUD operations along with filtering projects by status and technology.

---

## Student Details

**Student Name:** Harsh Kumar Sharma



---

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv

---

## Project Structure

```
student-project-api/
│
├── models/
│   └── Project.js
│
├── routes/
│   └── projectRoutes.js
│
├── server.js
├── package.json
├── .env
└── README.md
```

---

## Installation

### 1. Clone or Download the Project

```bash
git clone <repository-url>
```

or simply extract the ZIP file.

---

### 2. Install Dependencies

```bash
npm install
```

---

### 3. Configure Environment Variables

Create a `.env` file in the project root.

```env
MONGO_URI=mongodb://127.0.0.1:27017/studentProjects
PORT=5000
```

---

### 4. Start MongoDB

Ensure MongoDB is running on your system.

---

### 5. Run the Application

Development Mode

```bash
npm run dev
```

Production Mode

```bash
node server.js
```

---

## Base URL

```
http://localhost:5000/api/projects
```

---

# API Endpoints

## 1. Add New Project

**POST**

```
/api/projects
```

### Request Body

```json
{
  "studentName": "Harsh Kumar Sharma",
  "registrationNumber": "12418388",
  "projectTitle": "REST API Using Node.js",
  "technologyUsed": "Node.js, Express.js, MongoDB",
  "submissionDate": "2026-07-18",
  "projectStatus": "Submitted"
}
```

---

## 2. Get All Projects

**GET**

```
/api/projects
```

---

## 3. Get Project By ID

**GET**

```
/api/projects/:id
```

Example

```
/api/projects/687a5d8b25b9d8a1f1234567
```

---

## 4. Update Complete Project

**PUT**

```
/api/projects/:id
```

---

## 5. Update Project Status

**PATCH**

```
/api/projects/:id/status
```

Request Body

```json
{
    "projectStatus":"Approved"
}
```

---

## 6. Delete Project

**DELETE**

```
/api/projects/:id
```

---

## 7. Get Projects by Status

**GET**

```
/api/projects/status/Submitted
```

---

## 8. Get Projects by Technology

**GET**

```
/api/projects/technology/Node.js
```

---

# HTTP Status Codes

| Status Code | Meaning |
|-------------|----------|
|200|Request Successful|
|201|Resource Created|
|400|Bad Request|
|404|Project Not Found|
|500|Internal Server Error|

---

# Features

- RESTful API
- Express.js Routing
- MongoDB Database
- Mongoose ODM
- Schema Validation
- Async/Await
- Error Handling
- CRUD Operations
- Filter by Status
- Filter by Technology

---

# Author

**Harsh Kumar Sharma**

Registration Number: **12418388**
