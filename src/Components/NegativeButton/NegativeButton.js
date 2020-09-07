import React, { useContext } from "react";
import { NumberContext } from "../Providers/NumberProvider";
import classes from "../NumberButton/NumberButton.module.css";
export default function NegativeButton() {
  const { negativeHandler } = useContext(NumberContext);
  return (
    <button className={classes.NumberButton} onClick={negativeHandler}>
      -/+
    </button>
  );
}
