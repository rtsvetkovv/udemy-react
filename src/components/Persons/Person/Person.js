import React, { Component, createRef } from "react";

import { func, string, number, node } from "prop-types";

import classes from "./Person.css";
import withClass from "../../../hoc/withClass";
import Aux from "../../../hoc/_Aux";

class Person extends Component {
  static propTypes = {
    click: func,
    name: string,
    age: number,
    children: node
  };

  inputElement = createRef();

  componentDidMount() {
    if (this.props.position === 0) {
      this.inputElement.current.focus();
    }
  }

  focus = () => {
    this.inputElement.current.focus();
  };

  render() {
    const { name, age, children, changed, click } = this.props;
    return (
      <Aux>
        <p onClick={click}>
          I'm {name} and I am {age} years old!
        </p>
        <p>{children}</p>
        <input
          ref={this.inputElement}
          type="text"
          onChange={changed}
          defaultValue={name}
        />
      </Aux>
    );
  }
}

export default withClass(Person, classes.Person);
