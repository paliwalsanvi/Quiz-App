# Quiz App 

## 📌 Overview
This is a **web-based quiz application** with gamification elements, developed as part of the **Interview Round 1 Assignment**. The app fetches quiz data dynamically from an API, provides a smooth user experience, and includes engaging features such as a timer, scoring system, dark mode, and a leaderboard.

## 🚀 Features
- **Start Quiz**: Users can begin a quiz session with multiple-choice questions.
- **Dynamic Questions**: Fetches real-time quiz data from an external API.
- **Gamification Elements**: Confetti effects on correct answers, score tracking.
- **Dark Mode Toggle**: Users can switch between light and dark themes.
- **Timer Functionality**: Each question has a countdown timer.
- **Leaderboard**: Displays high scores of past players.
- **Responsive Design**: Works smoothly on desktops, tablets, and mobile devices.

## 🔗 Live Demo
https://youtu.be/cKrF68z3ZxQ

## 🛠 Tech Stack
- **Frontend:** React.js, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (for storing leaderboard data)
- **Libraries Used:** Axios, Confetti.js, React Router

## 📂 Folder Structure
```
📦 quiz-app
├── 📁 frontend
│   ├── 📁 src
│   │   ├── 📁 components (Reusable UI components)
│   │   ├── 📁 pages (Quiz, Leaderboard, Home)
│   │   ├── 📁 assets (Icons, images, CSS)
│   │   ├── App.js (Main app file)
│   │   ├── index.js (Entry point)
│   ├── package.json
│   ├── README.md
├── 📁 backend
│   ├── 📁 models (Database schema for leaderboard)
│   ├── 📁 routes (API endpoints for quiz and leaderboard)
│   ├── server.js (Main backend logic)
│   ├── package.json
├── 📁 public (Static assets)
```

## 🔧 Installation & Setup
### 1️⃣ Clone the Repository
```sh
git clone <repository-url>
cd quiz-app
```

### 2️⃣ Install Dependencies
#### Frontend
```sh
cd frontend
npm install
npm start
```
#### Backend
```sh
cd backend
npm install
npm start
```

### 3️⃣ Run the App
- Open `http://localhost:3000` in your browser.
- Ensure your backend is running on `http://localhost:5000`.

## 📹 Video Walkthrough
https://youtu.be/cKrF68z3ZxQ

## ✅ API Integration
The app fetches quiz data from:
```
https://api.jsonserve.com/Uw5CrX
```
### Error Handling
- Proper validation ensures smooth error handling.
- Displays error messages if data fails to load.

## 🎮 Gamification Elements
- **Confetti Animation** on correct answers.
- **Score Tracking** based on correct and incorrect answers.
- **Leaderboard** to track high scores.

## 🏆 Leaderboard Implementation
- Stores high scores in MongoDB.
- Fetches and displays top scores dynamically.

## 📜 License
This project is for interview assessment purposes only.

## 📩 Contact
For any queries, reach out via GitHub Issues or email at paliwalsanvi22@gmail.com.

