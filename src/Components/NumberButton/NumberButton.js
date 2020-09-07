import React, { useContext } from "react";
import { NumberContext } from "../Providers/NumberProvider";
import classes from "./NumberButton.module.css";
export default function NumberButton({ value, occupied }) {
  const { handleSetNumber } = useContext(NumberContext);
  return (
    <button
      className={
        occupied
          ? `${classes.NumberButton} ${classes.Occupied}`
          : `${classes.NumberButton}`
      }
      onClick={() => handleSetNumber(value)}
    >
      {value}
    </button>
  );
}
