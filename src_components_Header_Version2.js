import React from "react";

function Header() {
  return (
    <header style={headerStyle}>
      <span style={logoStyle}>TrueHue</span>
    </header>
  );
}

const headerStyle = {
  width: "100%",
  padding: "1.5rem 0 1rem",
  display: "flex",
  justifyContent: "center",
  background: "none"
};

const logoStyle = {
  fontFamily: "'Playfair Display SC', serif",
  fontSize: "2.5rem",
  letterSpacing: "0.1em",
  color: "#99694C",
  textShadow: "0 2px 8px #f8e2d6"
};

export default Header;