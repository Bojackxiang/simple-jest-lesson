import React, { Component } from "react";

class UndoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: this.props.list,
    };
  }

  render() {
    return (
      <div>
        <h2>Todo list {this.props.list.length}</h2>
        <ul>
          {this.props.list.map((item, index) => {
            return (
              <li key={index}>
                <div>
                  <span data-test="item">{item}</span>
                </div>
                <button
                  data-test="delete-btn"
                  onClick={() => this.props.delete(index)}
                >
                  delete
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default UndoList;
