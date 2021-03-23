import React, { Component } from "react";
import Header from "../Header/Header";
export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.addUndoItem = this.addUndoItem.bind(this);
    this.state = {
      undoList: [],
    };
  }

  addUndoItem(value) {
      this.setState({
          ...this.state, 
          undoList: [...this.state.undoList, value]
      })
  }

  render() {
    return (
      <>
        <Header addUndoItem={this.addUndoItem} />
      </>
    );
  }
}
