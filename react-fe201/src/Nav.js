import React from "react";

class Nav extends React.PureComponent {
  render() {
    return <nav className="nav">{this.props.brandName}</nav>;
  }
}

const TEMP = 10;

export { Nav, TEMP };
