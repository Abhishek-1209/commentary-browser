import React from "react";
import "./NavBar.css";

function NavBar({ onSearch }) {
  return (
    <div className="navbar">
      <h2>Commentary Browser</h2>
      <input
        type="text"
        placeholder="Search by name, email, or body..."
        onChange={(e) => onSearch(e.target.value)}
        className="search-box"
      />
    </div>
  );
}

export default NavBar;
