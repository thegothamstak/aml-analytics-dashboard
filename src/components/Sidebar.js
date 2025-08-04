import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <nav className="sidebar d-flex flex-column p-3" style={{ width: "220px" }}>
      <h4 className="text-white mb-4">AML Dashboard</h4>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `mb-2 nav-link ${isActive ? "active text-white" : "text-secondary"}`
        }
      >
        Canadian AML Reports
      </NavLink>
      {/* Future links can be added here */}
    </nav>
  );
};

export default Sidebar;
