import classes from "./popup.module.scss"
import React from "react"
import Backdrop from "./Backdrop/Backdrop.js"
const Popup = ({ children, closePopup }) => {
  return (
    <>
      <Backdrop click={closePopup} />
      <div className={classes.Popup}>
        <div>
          <p>{children}</p>
        </div>
      </div>
    </>
  )
}
export default Popup
