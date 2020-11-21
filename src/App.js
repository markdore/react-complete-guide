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
    otherState: 'something'
  }

  switchNameHandler = (newName, newAge) => {
    this.setState({persons: [
      { name: "Mark", age: 37 },
      { name: "Lucy", age: 25 },
      { name: newName, age: newAge }
    ]});
  }

  nameChangedHandler = (event) => {
    this.setState({persons: [
      { name: "Mark", age: 37 },
      { name: event.target.value, age: 25 },
      { name: "Sammy", age: 8 }
    ]});
  }

  render() {
    const style = {
      backgroundColor: 'yellow',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>YO</h1>
        <p>This is really working</p>

        <button 
          style={style}
          onClick={() => this.switchNameHandler('Amelia', 1)}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} 
          click={this.switchNameHandler.bind(this, "Amelia", 1)} />  
          {/* More efficient way of doing it */}
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          changed={this.nameChangedHandler} >My lovely wife
        </Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
