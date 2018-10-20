import React, { Component } from "react";

import Person from "./Person/Person";

class Persons extends Component {
  render() {
    const { persons, clicked, changed } = this.props;
    return persons.map((person, index) => {
      return (
        <Person
          click={() => clicked(index)}
          name={person.name}
          age={person.age}
          key={index}
          changed={event => changed(event, person.id)}
        />
      );
    });
  }
}

export default Persons;
