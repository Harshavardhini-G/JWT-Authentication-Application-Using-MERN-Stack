# JWT-Authentication-Application-Using-MERN-Stack
project:
  name: "JWT Authentication Application Using MERN Stack"
  description: |
    This MERN stack application implements secure user authentication using JWT (JSON Web Tokens).
    Users can register, login, and access protected routes. The backend uses Node.js and Express,
    with MongoDB as the database, and the frontend is built with React.

screenshots:
  - step: 1
    title: "App Open Page"
    image_path: "https://i.postimg.cc/t4Zg6XJx/Screenshot-2025-06-01-220847.png"
 - step: 2
    title: "Register Page"
    image_path: "https://i.postimg.cc/MpCpbhfr/Screenshot-2025-06-01-220928.png"
  - step: 3
    title: "Registration Successful"
    image_path: "https://i.postimg.cc/MG1KsdyZ/Screenshot-2025-06-01-224636.png"
  - step: 4
    title: "Database Store (MongoDB Data)"
    image_path: "https://i.postimg.cc/kGYnVZds/Screenshot-2025-06-01-224757.png"
  - step: 5
    title: "Login Page"
    image_path: "https://i.postimg.cc/154Rx9pj/Screenshot-2025-06-01-221011.png"
  - step: 6
    title: "Login Successful"
    image_path: "https://i.postimg.cc/ZKgb41HK/Screenshot-2025-06-01-224302.png"
  - step: 7
    title: "Welcome Page After Login"
    image_path: "https://i.postimg.cc/s2C3Z7bk/Screenshot-2025-06-01-224016.png"

features:
  - User registration with form validation
  - Password hashing with bcrypt
  - JWT token-based authentication for secure access
  - React frontend with responsive design
  - Protected routes with authentication checks
  - MongoDB for persistent data storage
  - Clear error handling and success messages

installation:
  steps:
    - "Clone the repository:"
    - "git clone https://github.com/Harshavardhini-G/JWT-Authentication-Application-Using-MERN-Stack.git"
    - "cd JWT-Authentication-Application-Using-MERN-Stack"
    - "Install backend dependencies:"
    - "cd backend"
    - "npm install"
    - "Install frontend dependencies:"
    - "cd ../frontend"
    - "npm install"
    - "Configure environment variables:"
    - |
      Create a `.env` file in the `backend` folder with:
      ```
      MONGO_URI=your_mongodb_connection_string
      JWT_SECRET=your_secret_key
      PORT=5000
      ```
    - "Start backend server:"
    - "npm run server"
    - "Start frontend app (in a new terminal):"
    - "cd frontend"
    - "npm start"
    - "Open the app in browser:"
    - "http://localhost:3000"

usage:
  steps:
    - "Register: Create a new user account using the registration form."
    - "Verify: See confirmation of successful registration."
    - "Login: Enter credentials to log in."
    - "Welcome: Access the protected welcome page after login."
    - "Data Storage: All user data is securely saved in MongoDB."

contribution:
  message: "Feel free to fork this repository and submit pull requests for improvements."

author:
  name: "Harshavardhini-G"
  email: "harshavardhini.pdy@gmail.com"

license:
  type: "MIT License"

 

