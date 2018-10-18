import React, { Component } from "react";
import classes from "./App.css";
import Persons from "../components/Persons/Persons";

class App extends Component {
  state = {
    persons: [
      { id: "123", name: "Max", age: 28 },
      { id: "23rf", name: "Manu", age: 29 },
      { id: "1cs", name: "Stephanie", age: 26 }
    ],
    otherState: "some other value",
    showPersones: false
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };
    //or const person = Object.assign({}, this.state.persons[personIndex])

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  deletePersoneHandler = personIndex => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    this.setState({ showPersones: !this.state.showPersones });
  };

  render() {
    let persons = null;
    let btnClass = "";

    if (this.state.showPersones) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersoneHandler}
            changed={this.nameChangedHandler}
          />
        </div>
      );
      btnClass = classes.Red;
    }

    const assignClasses = [];
    if (this.state.persons.length <= 2) {
      assignClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      assignClasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={assignClasses.join(" ")}>This is really working!</p>
        <button className={btnClass} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
