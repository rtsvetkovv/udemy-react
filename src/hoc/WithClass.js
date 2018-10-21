import React from "react";

const withClass = ({ classes, children }) => (
  <div className={classes}>{children}</div>
);

export default withClass;
