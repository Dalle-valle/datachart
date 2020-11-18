import React, { useEffect, useState } from "react";
import Main from "./components/Main";
import { checkInfo } from "./components/bobafetch";
import "./App.css";

function App() {
  useEffect(() => {
    const interval = setInterval(() => {
      checkInfo(setBars);
    }, 10000);
    return () => clearInterval(interval);
  }, []);
  const [bars, setBars] = useState([]);
  return <Main bars={bars} />;
}

export default App;
