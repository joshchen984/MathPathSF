import React from "react"
import classes from "./testimonials.module.scss"
import Testimonial from "./Testimonial/testimonial.js"
const Testimonials = props => {
  return (
    <div className={classes.Testimonials}>
      <h2>What People are Saying</h2>
      <div className={classes.quotes}>
        <Testimonial>
          “So clear and easy to understand. What an awesome resource. I have
          shared with our middle school parents group. Thank you!”
        </Testimonial>
        <Testimonial>
          “So helpful!!! It was so difficult trying to understand and piece
          together all the info from parent email threads. The website does a
          great job at explaining it clearly. I will share with other parents to
          save them a lot of headache :D!”
        </Testimonial>
        <Testimonial>
          “Our son is very interested in progressing along one of the
          advancement pathways to make sure he gets AP Calculus in high school.
          This is a great website - thank you for putting it together!”
        </Testimonial>
      </div>
    </div>
  )
}
export default Testimonials
