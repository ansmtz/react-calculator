import React, { useContext } from "react";
import { NumberContext } from "../Providers/NumberProvider";
import classes from "./ClearButton.module.css";
export default function ClearButton() {
  const { clearHandler } = useContext(NumberContext);
  return (
    <button className={classes.ClearButton} onClick={clearHandler}>
      C
    </button>
  );
}
