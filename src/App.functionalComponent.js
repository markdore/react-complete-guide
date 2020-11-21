import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [  personsState, setPersonsState ] = useState({
    persons: [
      { name: "Mark", age: 37 },
      { name: "Lucy", age: 25 },
      { name: "Sammy", age: 8 }
    ]
  });

  const [otherState, setOtherState] = useState('something else')

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        { name: "Mark", age: 37 },
        { name: "Lucy", age: 26 },
        { name: "Amelia", age: 1 }
      ]
    });
  }

  console.log(personsState, otherState);

  return (
    <div className="App">
      <h1>YO</h1>
      <p>This is really working</p>

      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My lovely wife</Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
    </div>
  );
}

export default app;