import React, { PureComponent, createRef } from "react";

import { array, func } from "prop-types";

import Person from "./Person/Person";

class Persons extends PureComponent {
  static propTypes = {
    persons: array,
    clicked: func.isRequired,
    changed: func.isRequired
  };

  lastPersonRef = createRef();

  componentDidMount() {
    this.lastPersonRef.current.focus();
  }

  render() {
    const { persons, clicked, changed } = this.props;
    return persons.map((person, index) => {
      return (
        <Person
          age={person.age}
          key={index}
          ref={this.lastPersonRef}
          click={() => clicked(index)}
          name={person.name}
          position={index}
          changed={event => changed(event, person.id)}
        />
      );
    });
  }
}

export default Persons;
