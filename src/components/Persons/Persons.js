import React, { PureComponent } from "react";
import Person from "./Person/Person";

class Persons extends PureComponent { // PureComponent will only run lifecycle events to re-render if something on the props has changed, saves having to do manually as below
  // shouldComponentUpdate(nextProps, nextState){
  //   console.log('Persons.js] shouldComponentUpdate');

  //   return nextProps.persons !== this.props.persons; // should also really be checking for changes to the two event handlers passed in props too
  // }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('Persons.js] getSnapshotBeforeUpdate');
    return { message: "Snapshot taken" };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('Persons.js] componentDidUpdate');
    console.log(snapshot);
  }

  componentWillUnmount() {
    console.log('Persons.js] componentWillUnmount');
  }

  render() {
    console.log("[Persons.js] rendering");
    return this.props.persons.map((person, index) => {
      return (
        <Person
          click={() => this.props.clicked(index)}
          changed={(event) => this.props.changed(event, person.id)}
          name={person.name}
          age={person.age}
          key={person.id}
        />
      );
    });
  };
}

export default Persons;