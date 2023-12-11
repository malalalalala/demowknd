"use client";

import React, { useState } from "react";
import "./UserProfile.css";
import UserMenu from "./UserMenu";

const UserProfile = ({ onToggle }) => {
  const [menuVisible, setMenuVisible] = useState(false);

  const handleToggle = () => {
    setMenuVisible(!menuVisible);
    // You can add more logic here if needed
  };

  return (
    <div className="container">
      <img src="avatar.png" alt="User Profile" />
      <p className="user-name">Savannah Nguyen</p>
      <div className="toggle-arrow" onClick={handleToggle}>
        <img src="arrow-down.svg" alt="toggle arrow" />
      </div>
      {menuVisible && <UserMenu onLogout={onToggle} />}
    </div>
  );
};

export default UserProfile;
