import React, { useContext } from "react";
import Display from "../Display/Display";
import BackButton from "../BackButton/BackButton";
import ClearButton from "../ClearButton/ClearButton";
import EqualButton from "../EqualButton/EqualButton";
import FunctionButton from "../FunctionButton/FunctionButton";
import NegativeButton from "../NegativeButton/NegativeButton";
import NumberButton from "../NumberButton/NumberButton";
import Pad from "../Pad/Pad";
import { NumberContext } from "../Providers/NumberProvider";
import classes from "./Calculator.module.css";
export default function Calculator() {
  const { number } = useContext(NumberContext);
  return (
    <div className={classes.Calculator}>
      <div className={classes.Head}>
        <h1 className={classes.Title}>Calculator</h1>
        <span>
          Designed and developed by Anthony Sedov.{" "}
          <a
            className={classes.Link}
            href="https://github.com/ansmtz/react-calculator"
          >
            Code
          </a>
        </span>
      </div>
      <Display />
      <Pad>
        <ClearButton />
        <BackButton />
        <NegativeButton />
        <FunctionButton value="/" />
        <NumberButton value="7" />
        <NumberButton value="8" />
        <NumberButton value="9" />
        <FunctionButton value="*" />
        <NumberButton value="4" />
        <NumberButton value="5" />
        <NumberButton value="6" />
        <FunctionButton value="-" />
        <NumberButton value="1" />
        <NumberButton value="2" />
        <NumberButton value="3" />
        <FunctionButton value="+" />
        <NumberButton value="0" occupied />
        <NumberButton value="." />
        <EqualButton />
      </Pad>
    </div>
  );
}
