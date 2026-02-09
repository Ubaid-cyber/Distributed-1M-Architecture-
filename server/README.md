# 🏔️ GTM Adventures - Trekking Management System

A robust, scalable backend for a Trekking Management Platform built using **Node.js** and **Modular Monolith Architecture**.

---

## 🏗️ Architecture Design

We are following a **Modular Monolith** approach.
- **Why?** To keep the code clean and organized like Microservices, but easy to deploy and manage like a Monolith.
- **Event-Driven:** Modules communicate via events (future implementation) to keep the system decoupled.

### Core Modules
1.  **Catalog:** Manages Treks, Itineraries, and Pricing.
2.  **Auth:** (Planned) User authentication & Role management.
3.  **Booking:** (Planned) Order placement & Cart management.
4.  **Payment:** (Planned) Transaction handling.

---

## 🛠️ Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB (via Mongoose)
- **Environment Management:** Dotenv
- **Security/Utils:** CORS, Helmet (Planned)

---

## 📂 Project Structure

The project is divided into two main parts: `client` (Frontend) and `server` (Backend).

```text
/
├── client/                 # React/Vite Frontend
│
└── server/                 # Node.js Backend
    ├── src/
    │   ├── config/         # Database & Env configurations
    │   ├── shared/         # Shared utilities (EventBus, Helpers)
    │   ├── modules/        # Business Logic Modules
    │   │   ├── catalog/    # [IMPLEMENTED] Trek Management
    │   │   ├── auth/       # [PENDING]
    │   │   └── booking/    # [PENDING]
    │   └── app.js          # App Entry Point
    ├── .env                # Environment Variables (Not committed)
    └── package.json        # Dependencies


🗄️ Database Schema (Catalog Module)
Trek Model
The Trek resource represents a hiking package.
Field
Type
Options
Description
name
String
Required, Unique
Name of the trek (e.g., "Kedarkantha")
description
String
Required
Detailed info about the trip
location
String
Required
Base camp or region
difficulty
Enum
Easy, Medium, Hard
Difficulty level
price
Number
Required
Cost per person
duration
Number
Required
Number of days
createdAt
Date
Default: Date.now
Auto-generated timestamp

🚀 API Endpoints
Base URL: /api/v1
1. Catalog Module
Method
Endpoint
Description
GET
/treks
Fetch all available treks
POST
/treks
Create a new trek (Admin only)

Sample Request Body (POST /treks):

JSON


{
  "name": "Valley of Flowers",
  "description": "A beautiful trek in Uttarakhand",
  "location": "Chamoli, Uttarakhand",
  "difficulty": "Easy",
  "price": 12000,
  "duration": 6
}


⚙️ How to Run Locally
Navigate to Server:
Bash
cd server


Install Dependencies:
Bash
npm install


Setup Environment Variables:
Create a .env file in the server/ root and add:
Code snippet
PORT=5000
MONGO_URI=mongodb://localhost:27017/gtm_adventures
NODE_ENV=development


Start Server:
Bash
npm run dev

Server will start on http://localhost:5000
