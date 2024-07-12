import React, { Component } from "react";

class Update extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "" };
  }

  async fetchEmail() {
    const response = await fetch(
      `https://reqres.in/api/users/${this.props.userId}`
    );
    const result = await response.json();
    this.setState({ email: result.data.email });
  }

  async componentDidUpdate(prevProps, prevState) {
    if (prevProps.userId !== this.props.userId) {
      console.log("Triggered");
      await this.fetchEmail();
    }
  }

  async componentDidMount() {
    await this.fetchEmail();
  }

  render() {
    return <h1>{this.state.email}</h1>;
  }
}

export default Update;
