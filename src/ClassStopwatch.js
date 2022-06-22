import React from "react";
class Stopwatch extends React.Component {
  constructor() {
    super();
    this.state = {
      second: 0,
      minute: 0,
      hour: 0,
      stop: false,
    };
  }
  handleStop = () => {
    this.setState({ stop: !this.state.stop });
    console.log(this.state.stop);
  };
  //componentmount --------------//
  componentDidMount() {
    this.setState({ second: 0, minute: 0, hour: 0 });
  }
 //////----componentupdate ---------------//
  componentDidUpdate() {
    if (this.state.stop === false) {
      this.timer = setTimeout(() => {
        this.setState({ second: this.state.second + 1 });
        if (this.state.second === 60)
          this.setState({ minute: this.state.minute + 1, second: 0 });
        if (this.state.minute === 60)
          this.setState({ hour: this.state.hour + 1, minute: 0 });
      }, 1000);
    } else {
      clearTimeout(this.timer);
    }
  }

  componentWillUnmount() {
    this.handleReset();
  }
  handleReset = () => {
    this.setState({ second: 0 });
    clearTimeout(this.timer);
  };

  render() {
    return (
      <>
        <span>
          {this.state.hour > 9 ? this.state.hour : "0" + this.state.hour}:
        </span>
        <span>
          {this.state.minute > 9 ? this.state.minute : "0" + this.state.minute}:
        </span>
        <span>
          {this.state.second > 9 ? this.state.second : "0" + this.state.second}
        </span>
        <button onClick={this.handleStop}>
          {this.state.stop ? "Resume" : "Stop"}
        </button>
        <button onClick={this.handleReset}>Reset</button>
      </>
    );
  }
}
export default Stopwatch;
