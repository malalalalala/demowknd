// src/components/UserMenu.js
import React from "react";
import "./UserMenu.css";

const UserMenu = ({ onLogout }) => {
  return (
    <div className="userMenu">
      <ul>
        <li onClick={onLogout}>Logout</li>
        <li>Profile Info</li>
      </ul>
    </div>
  );
};

export default UserMenu;
