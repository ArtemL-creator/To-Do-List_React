import React, { Component } from "react";
import "./styles.css";

export class LeftColumnElem extends React.Component {
  render() {
    const name = this.props.name;
    const count = this.props.count;
    return (
      <div className="leftColumnElem">
        <div className="leftColumnElemIcon">
          <svg
            width="30"
            height="20"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="10"
              y="0"
              width="20"
              height="20"
              stroke="black"
              fill="transparent"
              strokeWidth="5"
            />
          </svg>
        </div>

        <div className="leftColumnElemText">{name}</div>

        <div className="leftColumnElemCount">{count}</div>
      </div>
    );
  }
}
