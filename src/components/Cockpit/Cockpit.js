import React from "react";
import classes from "./Cockpit.css";

const cockpit = (props) => {
  const assignedClasses = [];
  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }

  let btnClass = [classes.Button];
  if (props.showPersons) {
    btnClass.push(classes.Red);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>YO</h1>

      <p className={assignedClasses.join(" ")}>This is really working</p>
      <button class={btnClass.join(" ")} onClick={props.toggle}>
        Toggle People
      </button>
    </div>
  );
};

export default cockpit;
