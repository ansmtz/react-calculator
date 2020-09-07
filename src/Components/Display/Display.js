import React, { useContext } from "react";
import classes from "./Display.module.css";
import { NumberContext } from "../Providers/NumberProvider";
export default function Display() {
  const { number, storedNumber, currentAction, result } = useContext(
    NumberContext
  );
  return (
    <div className={classes.Display}>
      {storedNumber}
      {currentAction}
      {!number && !storedNumber ? "0" : number}
    </div>
  );
}
