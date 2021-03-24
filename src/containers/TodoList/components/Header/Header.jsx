import React, { Component } from "react";
import "./style.css";
export default class Header extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.passValue = this.passValue.bind(this);
    this.state = {
      value: "",
    };
  }

  handleInputChange(e) {
    this.setState({
      ...this.state,
      value: e.target.value,
    });
  }

  handleKeyUp(e) {
    const { value } = this.state;
    if (e.keyCode === 13 && this.state.value) {
      this.props.updateList(value);
      this.setState({
        ...this.state,
        value: "",
      });
    }
  }

  passValue(value) {
    console.log(value);
  }

  render() {
    return (
      <div className="header">
        <div className="header-content">
          <h3>Todo</h3>
          <input
            data-test="input"
            value={this.state.value}
            onChange={this.handleInputChange}
            onKeyUp={this.handleKeyUp}
          />
        </div>
      </div>
    );
  }
}
