import React from "react";

import Person from "./Person/Person";

const Persons = ({ persons, clicked, changed }) => {
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
};

export default Persons;
