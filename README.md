# 📹 Zoom Clone
 
A full-stack video conferencing web application inspired by Zoom — built with React on the frontend and Node.js/Express on the backend, with real-time communication powered by WebRTC and Socket.IO.
 
🔗 **Live Demo:** [zoom-clone-xi-teal.vercel.app](https://zoom-clone-xi-teal.vercel.app)
 
---
 
## ✨ Features
 
- 🎥 Real-time peer-to-peer video and audio conferencing
- 💬 In-meeting text chat
- 🔗 Shareable meeting room links
- 🖥️ Clean, responsive UI
- 🔒 User authentication
- 📜 Meeting history
---
 
## 🛠️ Tech Stack
 
### Frontend
- **React.js** (Create React App)
- **Socket.IO Client** — real-time signaling
- **WebRTC** — peer-to-peer video/audio streams
- **CSS** — custom styling
### Backend
- **Node.js** + **Express.js** — REST API & signaling server
- **Socket.IO** — WebSocket-based communication
- **MongoDB** — data persistence (users, meeting history)
---
 
## 📁 Project Structure
 
```
Zoom-clone/
├── Frontend/          # React client application
│   ├── public/
│   └── src/
│       ├── pages/     # Home, Meeting Room, History
│       ├── contexts/  # Auth context
│       ├── styles/
│       └── App.js
├── Backend/           # Express + Socket.IO server
│   └── src/
│       ├── app.js
│       ├── controllers/
│       ├── models/
│       └── routes/
└── .gitignore
```
 
---
 
## 🚀 Getting Started
 
### Prerequisites
 
- Node.js (v16+)
- npm or yarn
- MongoDB instance (local or Atlas)
### 1. Clone the repository
 
```bash
git clone https://github.com/Bhumi-singh/Zoom-clone.git
cd Zoom-clone
```
 
### 2. Set up the Backend
 
```bash
cd Backend
npm install
```
 
Create a `.env` file in the `Backend/` directory:
 
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```
 
Start the backend server:
 
```bash
npm start
```
 
The server will run on `http://localhost:5000`.
 
### 3. Set up the Frontend
 
```bash
cd ../Frontend
npm install
```
 
Create a `.env` file in the `Frontend/` directory:
 
```env
REACT_APP_SERVER_URL=http://localhost:5000
```
 
Start the React app:
 
```bash
npm start
```
 
The app will open at `http://localhost:3000`.
 
---
 
## 🌐 Deployment
 
- **Frontend** is deployed on [Vercel](https://vercel.com)
- **Backend** can be deployed on [Render](https://render.com), [Railway](https://railway.app), or any Node.js hosting platform
---
 
## 🤝 Contributing
 
Pull requests are welcome! For major changes, please open an issue first to discuss what you'd like to change.
 
1. Fork the repo
2. Create your feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add your feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request
 ---
 
> Built with ❤️ by [Bhumi Singh](https://github.com/Bhumi-singh)
