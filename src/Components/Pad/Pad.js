import React from "react";
import classes from "./Pad.module.css";
export default function Pad(props) {
  return <div className={classes.Pad}>{props.children}</div>;
}
