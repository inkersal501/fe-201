import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    // On Mount
  }

  componentDidUpdate() {}

  increaseCount = () => {
    this.setState((prevState) => {
      console.log(prevState);
      console.log(this.props);
      return { count: prevState.count + this.props.diff };
    });
  };

  decreaseCount = () => {
    this.setState((currState, currProps) => {
      return { count: currState.count - currProps.diff };
    });
  };

  render() {
    return (
      <div className="center">
        <h1 className={this.state.count >= 0 ? "positive" : "negative"}>
          {this.state.count}
        </h1>
        <button onClick={this.increaseCount}>+{this.props.diff}</button>
        <button onClick={this.decreaseCount}>-{this.props.diff}</button>
      </div>
    );
  }
}

export default Counter;
