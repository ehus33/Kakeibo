import React from 'react';

const Header = ({ name = "friend" }) => {
  const hour = new Date().getHours();
  const timeOfDay = hour < 12 ? "morning" : hour < 18 ? "afternoon" : "evening";

  return (
    <div className="text-content">
      <h1>Good {timeOfDay}, {name}!</h1>
      <h3>What's on your mind?</h3>
    </div>
  );
};

export default Header;
