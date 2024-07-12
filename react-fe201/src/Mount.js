import React, { Component } from "react";

class Mount extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "" };
  }

  async componentDidMount() {
    const response = await fetch("https://reqres.in/api/users/2");
    const result = await response.json();
    this.setState({ email: result.data.email });
  }

  render() {
    return this.state.email ? (
      <h1>Email: {this.state.email}</h1>
    ) : (
      <h1>Loading...</h1>
    );
  }
}

export default Mount;
