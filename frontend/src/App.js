import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <div style={{ fontFamily: 'Arial, sans-serif' }}>
        <nav style={styles.navbar}>
          <div style={styles.brand}><Link to="/" style={styles.link}>MERN Auth App</Link></div>
          <div>
            {!isLoggedIn && (
              <>
                <Link to="/register" style={styles.link}>Register</Link>
                <Link to="/login" style={{ ...styles.link, marginLeft: '15px' }}>Login</Link>
              </>
            )}
            {isLoggedIn && (
              <button onClick={() => setIsLoggedIn(false)} style={styles.link}>Logout</button>
            )}
          </div>
        </nav>

        <div style={{ padding: '20px' }}>
          <Routes>
            <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

const styles = {
  navbar: {
    backgroundColor: '#6c63ff',
    color: 'white',
    padding: '10px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  brand: {
    fontSize: '20px',
    fontWeight: 'bold',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '16px',
    background: 'none',
    border: 'none',
    cursor: 'pointer'
  }
};

export default App;
