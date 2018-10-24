import React, { Component } from "react";

import classes from "./Person.css";
import withClass from "../../../hoc/withClass";
import Aux from "../../../hoc/_Aux";

class Person extends Component {
  render() {
    return (
      <Aux>
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          defaultValue={this.props.name}
        />
      </Aux>
    );
  }
}

export default withClass(Person, classes.Person);
