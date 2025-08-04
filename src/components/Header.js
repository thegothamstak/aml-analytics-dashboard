import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow-sm py-4 mb-4">
      <h1
        className="text-center"
        style={{
          background:
            "linear-gradient(90deg, #007bff, #00c6ff)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontWeight: "700",
          textShadow: "0 1px 2px rgba(0,0,0,0.1)",
          fontSize: "2.5rem",
          userSelect: "none",
        }}
      >
        Banking AML Dashboard
      </h1>
    </header>
  );
};

export default Header;
