import React from "react";

import Aux from "../../hoc/_Aux";

import classes from "./Cockpit.css";

const Cockpit = ({ persons, showPersons, clicked }) => {
  let btnClass = classes.Button;

  if (showPersons) {
    btnClass = [classes.Button, classes.Red].join(" ");
  }

  const assignClasses = [];
  if (persons.length <= 2) {
    assignClasses.push(classes.red);
  }
  if (persons.length <= 1) {
    assignClasses.push(classes.bold);
  }

  return (
    <Aux>
      <h1>Hi, I'm a React App</h1>
      <p className={assignClasses.join(" ")}>This is really working!</p>
      <button className={btnClass} onClick={clicked}>
        Toggle Persons
      </button>
    </Aux>
  );
};

export default Cockpit;
