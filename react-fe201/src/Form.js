import React from "react";

// Uncontrolled component
export default class Form extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    console.log(e);
    console.log("name", e.target.fullName.value);
  }

  componentDidUpdate() {
    console.log("componentDidUpdate executed!!!!!");
  }

  handleNameValidation(e) {
    console.log(e.target.value);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="fullName"
              onChange={this.handleNameValidation}
              autoComplete="off"
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

// Component -> Class based or Functional
// Component is dealing with Form -> Controlled component
// Uncontrolled component
