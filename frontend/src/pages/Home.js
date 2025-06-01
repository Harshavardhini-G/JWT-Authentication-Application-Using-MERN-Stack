import React from 'react';

const Home = ({ isLoggedIn }) => {
  return (
    <div>
      {isLoggedIn ? (
        <h2>Welcome to MERN Auth App!</h2>
      ) : (
        <h2>Please log in to see the welcome message.</h2>
      )}
    </div>
  );
};

export default Home;
