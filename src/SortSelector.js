import React from "react";
import "./styles.css";

const svg = (
  <svg width="30" height="20" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <rect
      x="0"
      y="0"
      width="20"
      height="20"
      stroke="black"
      fill="transparent"
      strokeWidth="5"
    />
  </svg>
);

export class SortSelector extends React.Component {
  render() {
    const sortTitle = this.props.sortTitle;
    const sortType = this.props.sortType;
    const closeHandle = this.props.closeHandle;
    const sortHandler = this.props.sortHandler;

    return (
      <div>
        <span onClick={sortHandler}>
          {svg} {sortTitle}
        </span>
        <button className="headerButtonStyle" onClick={closeHandle}>
          {svg}
        </button>
      </div>
    );
  }
}
