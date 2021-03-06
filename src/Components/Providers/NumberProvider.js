import React, { createContext, useState } from "react";

export const NumberContext = createContext();

export const NumberProvider = (props) => {
  const [number, setNumber] = useState("");
  const [storedNumber, setStoredNumber] = useState("");
  const [currentAction, setCurrentAction] = useState("");
  const [result, setResult] = useState(0);
  const handleSetNumber = (newNumber) => {
    // добавляем цифры только если текущее значение
    // не содержит . или новое значение не равно .
    if ((!number.includes(".") || newNumber !== ".") && number.length < 8) {
      setNumber(`${(number + newNumber).replace(/^0+/, "")}`);
    }
  };

  const handleStoredNumber = (newStoredNumber) => {
    setStoredNumber(newStoredNumber);
  };

  const handleFunction = (value) => {
    if (currentAction.length === 0) {
      setResult(0);
      handleStoredNumber(number);
      setNumber("");
      setCurrentAction(value);
    }
  };

  const calculate = (value) => {
    const numberFormatted = parseFloat(number),
      storedNumberFormatted = parseFloat(storedNumber);
    switch (value) {
      case "+":
        return +(numberFormatted + storedNumberFormatted).toFixed(12);
      case "/":
        return +(storedNumberFormatted / numberFormatted).toFixed(12);
      case "*":
        return +(storedNumberFormatted * numberFormatted).toFixed(12);
      case "-":
        return +(storedNumberFormatted - numberFormatted).toFixed(12);
      default:
        return number;
    }
  };

  const equalHandler = () => {
    if (storedNumber.length && number.length) {
      const res = calculate(currentAction);
      setResult(res.toString());
      setNumber(res.toString());
      setStoredNumber("");
      setCurrentAction("");
    }
    // setResult(0);
  };

  const clearHandler = () => {
    setNumber("");
    setStoredNumber("");
    setCurrentAction("");
    setResult(0);
  };

  const negativeHandler = () => {
    number && !number.includes("-") && setNumber(`-${number}`);
  };

  const backspaceHandler = () => {
    setNumber(`${number.slice(0, -1)}`);
  };

  return (
    <NumberContext.Provider
      value={{
        number,
        handleSetNumber,
        handleFunction,
        equalHandler,
        clearHandler,
        negativeHandler,
        result,
        storedNumber,
        currentAction,
        backspaceHandler,
      }}
    >
      {props.children}
    </NumberContext.Provider>
  );
};
