import React, { Component } from "react";
import classes from "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import AuthContext from "../context/auth-context";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] constructor");
    //this.state = bla bla -- this is the same as defining state as below
  }

  state = {
    persons: [
      { name: "Mark", age: 37, id: 1 },
      { name: "Lucy", age: 25, id: 2 },
      { name: "Sammy", age: 8, id: 3 },
    ],
    otherState: "something",
    showPersons: false,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false,
  };

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps");
    return state;
  }

  componentDidMount() {
    console.log("[App.js] componentDidMount");
  }

  shouldComponentUpdate() {
    console.log("[App.js] shouldComponentUpdate");
    return true;
  }

  componentDidUpdate() {
    console.log("[App.js] componentDidUpdate");
  }

  nameChangedHandler = (event, personId) => {
    const personIndex = this.state.persons.findIndex((p) => p.id === personId);

    let person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1,
      };
    });
  };

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);

    this.setState({ persons: persons });
  };

  togglePersonHandler = () => {
    const shouldShow = this.state.showPersons;
    this.setState({ showPersons: !shouldShow });
  };

  loginHandler = () => {
    this.setState({ authenticated: true });
  };

  render() {
    console.log("[App.js] render");
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      );
    }

    return (
      <div className={classes.App}>
        <button
          onClick={() => {
            this.setState({ showCockpit: false });
          }}
        >
          Remove Cockpit
        </button>
        <AuthContext.Provider
          value={{
            authenticated: this.state.authenticated,
            login: this.loginHandler,
          }}
        >
          {this.state.showCockpit ? (
            <Cockpit
              title={this.props.appTitle}
              personsLength={this.state.persons.length}
              showPersons={this.state.showPersons}
              toggle={this.togglePersonHandler}
              login={this.loginHandler}
            />
          ) : null}
          {persons}
        </AuthContext.Provider>
      </div>
    );
  }
}

export default App;
