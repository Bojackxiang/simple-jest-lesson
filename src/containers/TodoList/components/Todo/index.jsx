import React, { Component } from "react";
import Header from "../Header/Header";
import UndoList from "../UndoList";
export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.updateList = this.updateList.bind(this);
    this.delete = this.delete.bind(this);
    this.state = {
      list: [],
    };
  }

  updateList(value) {
    this.setState({
      list: [...this.state.list, value]
    })
  }

  delete(indexValue) {
    this.setState({
      undoList: this.state.list.splice(indexValue, 1),
    });
  }

  render() {
    return (
      <>
        <Header updateList={this.updateList} />
        <UndoList list={this.state.list} delete={this.delete} />
      </>
    );
  }
}
