import React, { useState } from "react";
import Header from "./components/Header";
import Upload from "./components/Upload";
import ResultCard from "./components/ResultCard";
import Footer from "./components/Footer";
import "./App.css";

const dummyCatalog = [
  { product: "Radiant Glow Foundation", shade: "Honey Silk", hex: "#E7BFA3", brand: "GlowGoddess" },
  { product: "Flawless Finish Concealer", shade: "Rose Beige", hex: "#F5D0C5", brand: "Roseate" },
  { product: "Luminous Dew Foundation", shade: "Amber Glow", hex: "#D9A074", brand: "Lumina" },
  { product: "Perfect Match Concealer", shade: "Satin Sand", hex: "#F2C9AA", brand: "TrueHue" },
  { product: "Velvet Touch Foundation", shade: "Caramel Blush", hex: "#C89B7C", brand: "Velvetique" },
];

function App() {
  const [result, setResult] = useState(null);

  // Simulate analysis - pick random shade
  const analyzeImage = (file) => {
    const random = Math.floor(Math.random() * dummyCatalog.length);
    setTimeout(() => setResult(dummyCatalog[random]), 1000); // fake delay
  };

  const reset = () => setResult(null);

  return (
    <div className="App">
      <Header />
      <main>
        {!result ? (
          <Upload onAnalyze={analyzeImage} />
        ) : (
          <ResultCard result={result} onTryAgain={reset} />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;