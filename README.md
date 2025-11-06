# Task Manager API

A **RESTful API** built with **Node.js**, **Express**, and **MongoDB Atlas** for managing tasks efficiently.  
This API allows users to **create, read, update, and delete tasks** with proper HTTP status codes and JSON responses. The project follows **clean architecture principles**, with clear separation of concerns for maintainability and scalability.

---

## Table of Contents
1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Project Structure](#project-structure)
4. [Installation & Setup](#installation--setup)
5. [Environment Variables](#environment-variables)
6. [API Endpoints](#api-endpoints)
7. [Error Handling](#error-handling)
8. [Testing](#testing)
9. [Technologies Used](#technologies-used)
10. [Screenshots](#screenshots)
11. [Future Improvements](#future-improvements)
12. [Author](#author)

---

## Project Overview
The Task Manager API provides a backend for task management applications.  
Users can perform the following operations:

- Add new tasks to a database
- Retrieve all tasks or a specific task by ID
- Update the details of existing tasks
- Delete tasks
- Handle errors with descriptive messages

The project emphasizes **clean code**, **modular architecture**, and **scalability**, making it suitable for learning backend development or extending into full applications.

---

## Features
- **Create Task:** Add a new task with `title`, `description`, and `status`.
- **Read Tasks:** Retrieve all tasks or a single task by its ID.
- **Update Task:** Modify an existing task’s details.
- **Delete Task:** Remove a task from the database.
- **Validation:** Ensures required fields are provided before saving.
- **Error Handling:** Returns proper HTTP status codes and descriptive messages.
- **Postman Collection:** Fully tested API with collection for easy testing.

---

## Project Structure
task-manager-api/
│
├── config/
│ └── db.js # MongoDB connection
│
├── controllers/
│ └── taskController.js # Business logic for tasks
│
├── middleware/
│ └── errorHandler.js # Centralized error handling
│
├── models/
│ └── Task.js # Mongoose schema for tasks
│
├── routes/
│ └── taskRoutes.js # All task-related endpoints
│
├── .env # Environment variables (not committed)
├── .gitignore # Ignore node_modules and .env
├── package.json
├── server.js # Main server file
└── README.md

---

## Installation & Setup
1. Clone the repository
git clone https://github.com/your-username/task-manager-api.git
cd task-manager-api
2. Install dependencies
   npm install
3. Set up environment variables in .env:
   MONGO_URI=your_mongodb_connection_string
PORT=5000
4. Start the server
   node server.js
   or with nodemon:
   npx nodemon server.js
5. Check if server is running
Visit:
http://localhost:5000/test
You should see:
API is working

---

## Environment Variables
| Variable  | Description                         |
| --------- | ----------------------------------- |
| MONGO_URI | MongoDB Atlas connection string     |
| PORT      | Port for the server (default: 5000) |

---

## API Endpoints

### Create a Task
- Method: POST
- URL: /api/tasks
- Headers: Content-Type: application/json
- Body:
{
  "title": "Finish backend setup",
  "description": "Complete the API routes for task manager",
  "status": "pending"
}
- Response: 201 Created with task object

### Get All Tasks
- Method: GET
- URL: /api/tasks
- Response: 200 OK with array of all tasks

### Get Task by ID
- Method: GET
- URL: /api/tasks/:id
- Response: 200 OK with single task object

### Update Task
- Method: PUT
- URL: /api/tasks/:id
- Headers: Content-Type: application/json
- Body: (update fields as needed)
{
  "title": "Updated task title",
  "description": "Updated description",
  "status": "completed"
}
- Response: 200 OK with updated task object

### Delete Task
- Method: DELETE
- URL: /api/tasks/:id
- Response: 200 OK with message:
{
  "message": "Task deleted successfully"
}

---

## Error Handling
The API returns proper HTTP status codes for errors:
- 400 Bad Request → Validation errors
- 404 Not Found → Task not found
- 500 Internal Server Error → Server or database errors
- Example response:
{
  "success": false,
  "message": "Task not found"
}

---

## Testing
- Use Postman to test endpoints.
- Import the Postman collection included in this repository.
- Ensure headers are set: Content-Type: application/json.
- Always use valid task _id for GET, PUT, DELETE.

---

## Technologies Used
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Postman (for API testing)

---

## Future Improvements
- Add user authentication and authorization
- Implement task categories and priorities
- Add pagination and search for tasks
- Add automated tests using Jest or Mocha

---

## License
This project is licensed under the **MIT License**.

---

## Author
Chioma Princess Ohwo
Full-stack Developer 
thevirtualtechmaven
