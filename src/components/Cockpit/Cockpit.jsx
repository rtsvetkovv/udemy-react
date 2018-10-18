import React from "react";

import classes from "./Cockpit.css";

const Cockpit = ({ persons, showPersons, clicked }) => {
  let btnClass = "";

  if (showPersons) {
    btnClass = classes.Red;
  }

  const assignClasses = [];
  if (persons.length <= 2) {
    assignClasses.push(classes.red);
  }
  if (persons.length <= 1) {
    assignClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>Hi, I'm a React App</h1>
      <p className={assignClasses.join(" ")}>This is really working!</p>
      <button className={btnClass} onClick={clicked}>
        Toggle Persons
      </button>
    </div>
  );
};

export default Cockpit;
