import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import styled from 'styled-components'


const StyledButton = styled.button`
    background-color: ${props => props.alt ? 'red' : 'green'};
    color: white;
    font: inherit;
    border: 1px solid blue;
    padding: 8px;
    cursor: pointer;

    &:hover {
      background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};;
      color: purple;
    }
  `;

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
    // const style = {
    //   backgroundColor: 'green',
    //   color: 'white',
    //   font: 'inherit',
    //   border: '1px solid blue',
    //   padding: '8px',
    //   cursor: 'pointer',
    //   ':hover': {
    //     backgroundColor: 'lightgreen',
    //     color: 'purple'
    //   }
    // }

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              changed={(event) => this.nameChangedHandler(event, person.id)}
              name={person.name}
              age={person.age}
              key={person.id} />
          })}
        </div>
      );

      // style.backgroundColor = 'red'; 
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // };
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <div className="App">
        <h1>YO</h1>

        <p className={classes.join(' ')}>This is really working</p>

        {/* <button 
          style={style}
          onClick={this.togglePersonHandler}>Toggle People</button> */}

        <StyledButton alt={this.state.showPersons} onClick={this.togglePersonHandler}>
          Toggle People
        </StyledButton>

        {persons}
      </div>
    );
  }
}

export default App;
