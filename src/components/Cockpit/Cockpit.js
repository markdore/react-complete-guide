import React, { useEffect } from "react";
import classes from "./Cockpit.css";

const cockpit = (props) => {
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    // could send HTTP Request
    // componentDidMount and componentDidUpdate in one really
    const timer = setTimeout(() => {
      alert('saved data to cloud!')
    }, 1000)

    return () => {
      clearTimeout(timer);
      console.log('[Cockpit.js] cleanUp functionality in useEffect'); 
    }
  }, []) // passing props.persons would mean this is executed whenever this property is changed.  Empty means only on load and unmount (compDidMount)

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');

    return () => {
      console.log('[Cockpit.js] cleanUp functionality in 2nd useEffect'); 
    }
  }) // passing no extra param will mean it runs on all events
  
  const assignedClasses = [];
  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold);
  }

  let btnClass = [classes.Button];
  if (props.showPersons) {
    btnClass.push(classes.Red);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>

      <p className={assignedClasses.join(" ")}>This is really working</p>
      <button className={btnClass.join(" ")} onClick={props.toggle}>
        Toggle People
      </button>
    </div>
  );
};

export default React.memo(cockpit); // only re-render if something has changed
