import React, { Component } from "react";
import Header from "../Header/Header";
export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.updateList = this.updateList.bind(this);
    this.state = {
      undoList: [],
    };
  }

  updateList(value) {
    this.setState({
      ...this.state,
      undoList: [...this.state.undoList, value],
    });
  }

  render() {
    return (
      <>
        <Header updateList={this.updateList} />
      </>
    );
  }
}
