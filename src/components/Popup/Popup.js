import classes from './popup.module.scss';
import React from "react";
import Backdrop from "./Backdrop/Backdrop.js";
const Popup = ({children}) => {
  return (
    <>
    <Backdrop/>
    <div className={classes.Popup}>
      {children}
    </div>
    </>
  );
}
export default Popup;
