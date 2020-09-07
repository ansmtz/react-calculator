import React, { useContext } from "react";
import { NumberContext } from "../Providers/NumberProvider";
import classes from "../FunctionButton/FunctionButton.module.css";
export default function EqualButton() {
  const { equalHandler } = useContext(NumberContext);
  return (
    <button className={classes.FunctionButton} onClick={equalHandler}>
      =
    </button>
  );
}
