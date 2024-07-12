import React from "react";
import { Nav } from "./Nav";

export default class ControlledForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(e);
    console.log("name", e.target.fullName.value);
  }

  handleNameChange(e) {
    console.log(e.target.value);
    this.setState({
      fullName: e.target.value,
    });
  }

  componentDidMount() {
    console.log("componentDidMount executed");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate executed!!!!!");
  }

  render() {
    console.log("render executed");
    return (
      <div>
        <Nav brandName="Controlled Form" />
        <form onSubmit={this.handleSubmit}>
          <p>{this.state.fullName}</p>
          <label>
            Name:
            <input
              type="text"
              name="fullName"
              value={this.state.fullName}
              onChange={(e) => this.handleNameChange(e)}
              autoComplete="off"
            />
          </label>
          <input type="submit" value="Submit" />
          <br />
          {this.state.fullName.length <= 4
            ? "Name should be of length more than 4"
            : null}
        </form>
      </div>
    );
  }
}
// Controller -> Mounting -> Updating
// Nav (Moutning) (Unmounting)
