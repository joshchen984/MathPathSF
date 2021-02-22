import React from 'react'
import classes from './testimonial.module.scss';

const Testimonial = (props) => {
  return (
    <div className={classes.Testimonial}>
      <p>{props.children}</p>
    </div>
  );
}
export default Testimonial;