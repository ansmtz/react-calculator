import React, { useContext } from "react";
import { NumberContext } from "../Providers/NumberProvider";
import classes from "./FunctionButton.module.css";
export default function FunctionButton({ value }) {
  const { handleFunction } = useContext(NumberContext);
  return (
    <button
      className={classes.FunctionButton}
      onClick={() => handleFunction(value)}
    >
      {value}
    </button>
  );
}
