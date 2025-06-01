# 📦 JWT Authentication Application Using MERN Stack
project:
  name: "🔐 JWT Authentication Application Using MERN Stack"
  description: |
    This MERN stack application implements secure user authentication using JWT (JSON Web Tokens).
    Users can 📝 register, 🔑 login, and access 🔒 protected routes. The backend uses Node.js and Express,
    MongoDB as the database 🗄️, and the frontend is built with React ⚛️.

# 🔥 Screenshots

<table>
  <tr>
    <td align="center"><b>App Open</b><br><img src="https://i.postimg.cc/t4Zg6XJx/Screenshot-2025-06-01-220847.png" width="200"/></td>
    <td align="center"><b>Register</b><br><img src="https://i.postimg.cc/MpCpbhfr/Screenshot-2025-06-01-220928.png" width="200"/></td>
    <td align="center"><b>Register Success</b><br><img src="https://i.postimg.cc/MG1KsdyZ/Screenshot-2025-06-01-224636.png" width="200"/></td>
  </tr>
  <tr>
    <td align="center"><b>DB Store</b><br><img src="https://i.postimg.cc/kGYnVZds/Screenshot-2025-06-01-224757.png" width="200"/></td>
    <td align="center"><b>Login</b><br><img src="https://i.postimg.cc/154Rx9pj/Screenshot-2025-06-01-221011.png" width="200"/></td>
    <td align="center"><b>Login Success</b><br><img src="https://i.postimg.cc/ZKgb41HK/Screenshot-2025-06-01-224302.png" width="200"/></td>
  </tr>
  <tr>
    <td align="center"><b>Welcome Page</b><br><img src="https://i.postimg.cc/s2C3Z7bk/Screenshot-2025-06-01-224016.png" width="200"/></td>
    <td></td>
    <td></td>
  </tr>
</table>
# ✨ Features

- 📝 User registration with form validation  
- 🔒 Password hashing with bcrypt  
- 🎟️ JWT token-based authentication for secure access  
- ⚛️ React frontend with responsive design  
- 🚪 Protected routes with authentication checks  
- 🗃️ MongoDB for persistent data storage  
- ✅ Clear error handling and success messages  

# ⚙️ Installation

```bash
# 📥 Clone the repository
git clone https://github.com/Harshavardhini-G/JWT-Authentication-Application-Using-MERN-Stack.git

# 📁 Navigate to the project folder
cd JWT-Authentication-Application-Using-MERN-Stack

# 📦 Install backend dependencies
cd backend
npm install

# 📦 Install frontend dependencies
cd ../frontend
npm install
🔧 Configure Environment Variables
Create a .env file inside the backend/ folder with the following:

env
Copy
Edit
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
▶️ Run the App
bash
Copy
Edit
# 🚀 Start backend server
cd backend
npm run server

# 🖥️ Start frontend app (in a new terminal)
cd frontend
npm start
Open the app in your browser: http://localhost:3000

🚀 Usage Steps
📝 Register: Create a new user account using the registration form.

✅ Registration Success: You’ll get a success message.

🔐 Login: Enter your registered credentials.

👋 Welcome: You’ll land on the protected welcome page.

🗄️ Data Storage: User data is saved securely in MongoDB.

🤝 Contribution
Feel free to fork this repository and submit pull requests for improvements.
We welcome ideas, suggestions, and collaboration!

👩‍💻 Author
Name: Harshavardhini-G
Email: harshavardhini.pdy@gmail.com

📝 License
This project is licensed under the MIT License.
