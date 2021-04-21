import "./App.css";
import React, { useState, useEffect, useRef } from "react";

function App() {
  const [display, setDisplay] = useState("none");
  const inputRef = useRef();

  useEffect(() => {
    const out = (event) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target) &&
        display === "block"
      ) {
        setDisplay("none");
      }
    };
    document.addEventListener("click", out);
    return () => document.addEventListener("click", out);
  });

  const popUp = (id) => {
    setDisplay(id);
  };
  return (
    <div ref={inputRef} className="App">
      {display === "none" ? (
        <div className="start">
          <button onClick={() => popUp("block")}>Click Pop!</button>
        </div>
      ) : (
        <div className="back">
          <button onClick={() => popUp("none")}>Back!</button>
        </div>
      )}
    </div>
  );
}

export default App;
