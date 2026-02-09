# MERN Stack Project Starter
This is a complete boilerplate for a Full Stack MERN application. It is set up with a **React + Vite** frontend (styled with Tailwind CSS) and a **Node.js + Express** backend (connected to MongoDB).

## 🚀 Tech Stack

**Frontend (Client):**
- React (Vite)
- Tailwind CSS (v3)
- PostCSS & Autoprefixer

**Backend (Server):**
- Node.js
- Express.js
- Mongoose (MongoDB)
- Dotenv (Environment Variables)
- Cors (Cross-Origin Resource Sharing)

---

## 📂 Project Structure

```
root/
├── client/          # Frontend (React + Tailwind)
│   ├── src/
│   ├── public/
│   ├── tailwind.config.js
│   └── package.json
├── server/          # Backend (Node + Express)
│   ├── index.js     # Entry point
│   ├── .env         # Environment variables (not pushed to git)
│   └── package.json
└── README.md
```

# 🛠️ Installation & Setup
Follow these steps to get the project running on your local machine.

1. **Prerequisites**: Make sure you have Node.js installed on your computer.

2. **Install Dependencies**: You need to install dependencies for both the client and server folders.

### Setup for the Back-End:

```
cd server
npm install
Setup Frontend:
```
### Setup for the Front-End
```
cd ../client
npm install
⚙️ Configuration (Environment Variables)
Navigate to the server folder.
```

Create a file named .env.
Add your MongoDB connection string and port:
```
PORT=5000
MONGO_URI=your_mongodb_connection_string_here
```
▶️ Running the Application
**For development, you need to run the backend and frontend in two separate terminals.**

### Terminal 1: Start Backend
```
cd server
npm run dev
```
Server will start on: http://localhost:5000

### Terminal 2: Start Frontend
```
cd client
npm run dev
Client will start on: http://localhost:5173
```
