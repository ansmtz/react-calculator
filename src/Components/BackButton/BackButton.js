import React, { useContext } from "react";
import { NumberContext } from "../Providers/NumberProvider";
import classes from "./BackButton.module.css";
export default function BackButton() {
  const { backspaceHandler } = useContext(NumberContext);
  return (
    <button className={classes.BackButton} onClick={backspaceHandler}>
      ←
    </button>
  );
}
