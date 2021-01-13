import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit'

class App extends Component {
  state = {
    persons: [
      { name: "Mark", age: 37, id: 1 },
      { name: "Lucy", age: 25, id: 2 },
      { name: "Sammy", age: 8, id: 3 }
    ],
    otherState: 'something',
    showPersons: false
  }

  nameChangedHandler = (event, personId) => {
    const personIndex = this.state.persons.findIndex(p => p.id === personId);

    let person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);

    this.setState({ persons: persons });
  }

  togglePersonHandler = () => {
    const shouldShow = this.state.showPersons;
    this.setState({ showPersons: !shouldShow })
  }

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
          <Persons
            persons = {this.state.persons}
            clicked= {this.deletePersonHandler}
            changed = {this.nameChangedHandler} />
      );
    }

    
    return (
      <div className={classes.App}>
        <Cockpit
          persons = {this.state.persons}
          showPersons = {this.state.showPersons}
          toggle = {this.togglePersonHandler}
        />
        {persons}
      </div>
    );
  }
}

export default App;
