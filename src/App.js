import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    // Initial state
    this.state = {
      count: 0,
    };
  }

  // Increment handler
  handleIncrement = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  // Decrement handler
  handleDecrement = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  };

  render() {
    return (
      <div className="App">
        <h1>Counter App</h1>
        <p>Count: {this.state.count}</p>
        <div>
          <button onClick={this.handleIncrement}>Increment</button>
          <button onClick={this.handleDecrement}>Decrement</button>
        </div>
      </div>
    );
  }
}

export default App;
