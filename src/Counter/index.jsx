import { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    // початковий стан
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    // setState(зміни стану) перерендер сторінки
    this.setState({ count: this.state.count + 1 });
  };

  // додати кнопку - 1 прописати обробник decrement

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <>
        <div>{this.state.count}</div>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.increment}>+</button>
      </>
    );
  }
}

export default Counter;
