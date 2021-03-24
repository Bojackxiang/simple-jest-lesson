import React, { Component } from "react";

class UndoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: this.props.list,
    };
  }

  render() {
    const { list } = this.state;
    return (
      <div>
        <ul>
          {list.map((item, index) => (
            <li key={index}>
              <span data-test="item">{ item }</span>
              <button data-test="delete-btn">delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default UndoList;
