import React from "react";
import Calculator from "./Components/Calculator/Calculator";
import { NumberProvider } from "./Components/Providers/NumberProvider";
function App() {
  return (
    <div>
      <NumberProvider>
        <Calculator />
      </NumberProvider>
    </div>
  );
}

export default App;
