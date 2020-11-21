import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: "Mark", age: 37 },
      { name: "Lucy", age: 25 },
      { name: "Sammy", age: 8 }
    ],
    otherState: 'something',
    showPersons: false
  }

  nameChangedHandler = (event) => {
    this.setState({persons: [
      { name: "Mark", age: 37 },
      { name: event.target.value, age: 25 },
      { name: "Sammy", age: 8 }
    ]});
  }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons;

    persons.splice(personIndex, 1);

    this.setState({persons: persons});
  }

  togglePersonHandler = () => {
    const shouldShow = this.state.showPersons;
    this.setState({showPersons: !shouldShow})
  }

  render() {
    const style = {
      backgroundColor: 'yellow',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              click={() => this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age} />
          })}
        </div>
      );
    } 
    return (
      <div className="App">
        <h1>YO</h1>
        <p>This is really working</p>

        <button 
          style={style}
          onClick={this.togglePersonHandler}>Toggle People</button>

        {persons}
      </div>
    );
  }
}

export default App;
