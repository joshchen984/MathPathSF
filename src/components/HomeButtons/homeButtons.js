import React from 'react';
import classes from './homebuttons.module.scss'
import PageButton from "../PageButton/PageButton.js"
const HomeButtons = (props) => {
  return (
    <div className={classes.HomeButtons}>
      <PageButton to="/sfusd-pathways">SFUSD-Recommended<br/>Math Pathways</PageButton>
      <PageButton to="/eighth-grade">Calculus Workaround:<br/>8th Grade</PageButton>
      <PageButton to="/high-school">Calculus Workaround:<br/>High School</PageButton>
    </div>
  );
}
export default HomeButtons;
