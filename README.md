# 🚀 CaptionCraft

CaptionCraft is a full-stack AI-powered web application that allows users to upload images and instantly generate engaging captions. It combines secure authentication, image processing, and AI to deliver catchy captions with emojis and hashtags in real time.

---

## ✨ Features

* 🔐 User Authentication (JWT + Cookies)
* 🖼️ Image Upload (Multer)
* 🤖 AI Caption Generation (Gemini API)
* ⚡ Real-time caption response
* 🎯 Short, engaging captions with emojis & hashtags

---

## 🧠 Tech Stack

### Backend

* Node.js
* Express.js
* MongoDB (Mongoose)
* JWT Authentication
* Multer (File Upload)

### Frontend

* React.js
* Tailwind CSS

### AI Integration

* Gemini API (Google GenAI)

---

## 📂 Project Structure

/backend
  ├── models
  ├── routes
  ├── controllers
  ├── middleware
  └── services

/frontend
  ├── components
  ├── pages
  └── assets

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone <your-repo-link>
cd CaptionCraft
```

### 2. Install dependencies

#### Backend

```bash
cd backend
npm install
```

#### Frontend

```bash
cd frontend
npm install
```

---

### 3. Setup Environment Variables

Create a `.env` file in backend:

```env
PORT=3000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
GEMINI_API_KEY=your_api_key
```

---

### 4. Run the project

#### Backend

```bash
npm run dev
```

#### Frontend

```bash
npm start
```

---

## 🔄 Workflow

1. User registers/logs in
2. Uploads an image
3. Backend processes image
4. Gemini API generates caption
5. Caption is returned to user

---

## 🛡️ Security

* Password hashing using bcrypt
* JWT-based authentication
* Cookies for session handling

---

## 🚀 Future Improvements

* Image history for users
* Download/share captions
* Better UI/UX
* Deployment (Vercel + Render)

---

## 🤝 Contributing

Feel free to fork this repository and contribute!

---

## 📌 Author

**Ayush**
B.Tech | Developer | DSA Enthusiast

---
