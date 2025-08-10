import React from "react";

function Footer() {
  return (
    <footer style={footerStyle}>
      <span style={{ color: "#99694C" }}>© {new Date().getFullYear()} TrueHue</span>
    </footer>
  );
}

const footerStyle = {
  width: "100%",
  padding: "1rem 0",
  textAlign: "center",
  background: "none"
};

export default Footer;