# FitTrack Backend

FitTrack is a full-stack MERN workout tracking application built for my final Per Scholas capstone project.

This repository contains the backend API. It handles user authentication, stores workout information in MongoDB, and allows users to manage their workouts.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Tokens (JWT)
- bcrypt
- dotenv
- CORS
- Morgan

## Features

- User registration and login
- Password hashing using bcrypt
- JWT authentication
- Protected workout routes
- Full CRUD operations for workouts
- MongoDB database integration
- Workouts connected to individual users

## Models

### User
Stores a user's name, email, and hashed password.

### Workout
Stores workout name, exercise, muscle group, sets, reps, weight, date, and notes. Each workout belongs to a user.

## API Routes

### Authentication

| Method | Route | Description |
| --- | --- | --- |
| POST | /api/auth/register | Register a new user |
| POST | /api/auth/login | Log in and receive a JWT |

### Workouts

All workout routes require a valid JWT.

| Method | Route | Description |
| --- | --- | --- |
| GET | /api/workouts | View user's workouts |
| GET | /api/workouts/:id | View one workout |
| POST | /api/workouts | Create a workout |
| PUT | /api/workouts/:id | Update a workout |
| DELETE | /api/workouts/:id | Delete a workout |

## Installation

Clone this repository:

```bash
git clone https://github.com/HakimM43/fittrack-backend.git
cd fittrack-backend
npm install
```

Create a `.env` file in the backend folder:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Never commit real credentials or your `.env` file to GitHub.

Start the development server:

```bash
npm run dev
```

The API will run at http://localhost:3000 by default.

## Frontend Repository

https://github.com/HakimM43/fittrack-frontend

## Future Improvements

- Workout progress tracking
- Personal records
- Exercise categories
- Workout history and charts

## Author

Hakim Mosley

Per Scholas AI Native Software Development Capstone
