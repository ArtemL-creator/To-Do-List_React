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

export class RightColumn extends React.Component {
  render() {
    const rightHandler = this.props.rightHandler;

    return (
      <div className="rightColumn">
        <div />
        <div className="footer">
          <div className="rightColumnFooterButtonDiv">
            <button onClick={rightHandler} className="headerButtonStyle">
              {svg}
            </button>
          </div>
        </div>
      </div>
    );
  }
}
