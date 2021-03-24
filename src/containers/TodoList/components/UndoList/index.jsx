import React, { Component } from "react";
import "./style.css";
class UndoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: this.props.list,
    };
  }

  render() {
    return (
      <div className="undo_list_wrapper">
        <h2>Todo list {this.props.list.length}</h2>
        <ul className="list-group">
          {this.props.list.map((item, index) => {
            return (
              <li key={index} data-test="list-item">
                <div className="undo_list_item">
                  <button
                    data-test="delete-btn"
                    onClick={() => this.props.delete(index)}
                  >
                    delete
                  </button>
                  <div style={{ display: "inline-block", marginLeft: 30 }}>
                    <h4 data-test="item">{item}</h4>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default UndoList;
