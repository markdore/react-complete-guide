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

    return (
      <div className="App">
        <h1>YO</h1>
        <p>This is really working</p>

        <button 
          style={style}
          onClick={this.togglePersonHandler}>Show People</button>

        { this.state.showPersons === true ? 
          <div >
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
          </div> : null }
      </div>
    );
  }
}

export default App;
