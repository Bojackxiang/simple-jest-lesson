import React, { Component } from "react";
import Header from "../Header/Header";
import UndoList from "../UndoList";
export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.updateList = this.updateList.bind(this);
    this.state = {
      undoList: [],
    };
  }

  updateList(value) {
    console.log(this.state);
    this.setState({
      ...this.state,
      undoList: [...this.state.undoList, value],
    });
  }

  render() {
    return (
      <>
        <Header updateList={this.updateList} />
        <UndoList list={[]}/>
      </>
    );
  }
}
