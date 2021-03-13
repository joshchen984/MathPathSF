import React from "react"
import classes from "./backdrop.module.scss"
const Backdrop = ({ click }) => (
  <div className={classes.Backdrop} onClick={click}></div>
)
export default Backdrop
