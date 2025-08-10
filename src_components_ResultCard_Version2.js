import React from "react";

function ResultCard({ result, onTryAgain }) {
  return (
    <div style={{ ...cardStyle, borderColor: result.hex }}>
      <div style={{ ...shadeDotStyle, background: result.hex }}></div>
      <h2 style={{ color: "#99694C", margin: "0 0 0.5rem" }}>{result.shade}</h2>
      <div style={{ fontWeight: "bold", marginBottom: "0.2rem" }}>{result.product}</div>
      <div style={{ color: "#a17c6d", marginBottom: "0.8rem" }}>{result.brand}</div>
      <button style={buttonStyle} onClick={onTryAgain}>Try Again</button>
    </div>
  );
}

const cardStyle = {
  border: "2px solid #99694C",
  borderRadius: "1.5rem",
  background: "rgba(255,255,255,0.9)",
  padding: "2rem 1.5rem",
  minWidth: "250px",
  maxWidth: "90vw",
  textAlign: "center",
  boxShadow: "0 4px 24px #eec1a633",
  margin: "1rem auto",
  position: "relative"
};

const shadeDotStyle = {
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  margin: "0 auto 1rem",
  border: "2px solid #fff",
  boxShadow: "0 2px 8px #eec1a655"
};

const buttonStyle = {
  background: "#99694C",
  color: "#fff",
  border: "none",
  borderRadius: "2rem",
  padding: "0.7rem 2rem",
  fontSize: "1.1rem",
  fontWeight: "bold",
  cursor: "pointer",
  marginTop: "1.1rem",
  transition: "background 0.2s, color 0.2s",
  boxShadow: "0 1px 8px #fbdacb44"
};

export default ResultCard;