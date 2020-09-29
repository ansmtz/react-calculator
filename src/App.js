import React from "react";
import Calculator from "./Components/Calculator/Calculator";
import { NumberProvider } from "./Components/Providers/NumberProvider";
import './App.css';
function App() {
  return (
    <div className="App">
      <NumberProvider>
        <Calculator />
      </NumberProvider>
    </div>
  );
}

export default App;
