import React, { Component } from "react";
import "./styles.css";

export class LeftColumnElem extends React.Component {
  render() {
    const name = this.props.name;
    const count = this.props.count;
    const svg = this.props.svg;
    return (
      <div className="leftColumnElem">
        <div className="leftColumnElemIcon">
          {svg}
        </div>

        <div className="leftColumnElemText">{name}</div>

        <div className="leftColumnElemCount">{count}</div>
      </div>
    );
  }
}
