import React from "react";
import Button from "../Elements/Button";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleIncrement = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  handleDecrement = () => {
    this.setState((prevState) => ({
      count: prevState.count > 0 ? prevState.count - 1 : 0,
    }));
  };

  render() {
    return (
      <div className="flex items-center">
        <Button className="h-6 bg-blue-500" onClick={this.handleDecrement}>
          -
        </Button>
        <h1 className="mx-5">{this.state.count}</h1>
        <Button className="h-6 bg-blue-500" onClick={this.handleIncrement}>
          +
        </Button>
      </div>
    );
  }
}

export default Counter;
