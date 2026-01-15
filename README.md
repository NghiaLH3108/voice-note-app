# 🎙️ Voice Note App

Ứng dụng **Voice Note** cho phép người dùng:
- Đăng ký / đăng nhập tài khoản
- Tạo ghi chú văn bản
- Đính kèm **hình ảnh** và **ghi âm**
- Quản lý note theo từng user

Project được xây dựng theo mô hình **Mobile App + Backend API + Database**.

---

## 🏗️ Kiến trúc tổng thể
    React Native (Mobile App)
    |
    | REST API (JSON)
    ↓
    Node.js + Express (Backend)
    |
    ↓
    MySQL (Database)


⚠️ Mobile app **không kết nối trực tiếp** MySQL, mọi thao tác đều thông qua Backend.

---

## 🧰 Công nghệ sử dụng

### Frontend
- React Native
- React Navigation
- Context API
- Axios / Fetch API

### Backend
- Node.js
- Express.js
- MySQL
- JWT (Authentication)
- bcrypt (Hash password)

### Database
- MySQL 9.0

## 📁 Cấu trúc thư mục

voice-note-app/
│
├─ backend/
│ ├─ src/
│ │ ├─ config/
│ │ ├─ controllers/
│ │ ├─ middlewares/
│ │ ├─ routes/
│ │ └─ app.js
│ ├─ .env.example
│ ├─ server.js
│ └─ package.json
│
├─ frontend/
│ ├─ src/
│ │ ├─ api/
│ │ ├─ assets/
│ │ ├─ components/
│ │ ├─ constants/
│ │ ├─ context/
│ │ ├─ hooks/
│ │ ├─ navigations/
│ │ ├─ screens/
│ │ ├─ services/
│ │ ├─ types/
│ │ └─ utils/
│ ├─ .env.example
│ ├─ App.js
│ └─ package.json
│
├─ database/
│   └─ voice-note-app.sql
├─ .gitignore
└─ README.md


## ⚙️ Cài đặt & chạy project

### 1️⃣ Clone project
```bash
git clone https://github.com/NghiaLH3108/voice-note-app.git
cd voice-note-app

### 2️⃣ Backend setup
```bash
cd backend
npm install

- Tạo file .env từ mẫu:
```bash
cp .env.example .env

- Chạy server:
```bash
npm start

- Backend chạy tại: http://localhost:3000

### 3️⃣ Frontend setup
```bash
cd frontend
npm install

- Chạy app:
```bash
npx react-native run-android

📌 Android Emulator dùng API: http://10.0.2.2:3000

📡 API chính
    Method	    Endpoint	    Mô tả
    POST	    /register	    Đăng ký
    POST	    /login	        Đăng nhập
    GET	        /notes	        Lấy danh sách note
    POST	    /notes	        Tạo note
    PUT	        /notes/:id	    Cập nhật note
    DELETE	    /notes/:id	    Xóa note

👨‍💻 Tác giả: Lê Hữu Nghĩa
GitHub: https://github.com/NghiaLH3108