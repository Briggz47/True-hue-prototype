import React, { useRef, useState } from "react";

function Upload({ onAnalyze }) {
  const fileInput = useRef();
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setUploading(true);
      onAnalyze(e.target.files[0]);
    }
  };

  return (
    <div style={containerStyle}>
      <label htmlFor="file-upload" style={labelStyle}>
        Upload a Selfie
        <input
          id="file-upload"
          type="file"
          accept="image/*"
          ref={fileInput}
          style={{ display: "none" }}
          onChange={handleFileChange}
          disabled={uploading}
        />
      </label>
      {uploading && <div style={loadingStyle}>Analyzing...</div>}
    </div>
  );
}

const containerStyle = {
  background: "rgba(255,255,255,0.7)",
  padding: "2rem 1.5rem",
  borderRadius: "1.5rem",
  boxShadow: "0 2px 16px 0 #fbdacb44",
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
};

const labelStyle = {
  background: "#fff",
  border: "2px solid #99694C",
  color: "#99694C",
  fontWeight: "bold",
  borderRadius: "2rem",
  padding: "1rem 2rem",
  cursor: "pointer",
  fontSize: "1.2rem",
  transition: "background 0.2s, color 0.2s",
  boxShadow: "0 1px 6px #eec1a633",
};

const loadingStyle = {
  marginTop: "1rem",
  color: "#99694C",
  fontSize: "1.1rem",
  fontWeight: "bold"
};

export default Upload;