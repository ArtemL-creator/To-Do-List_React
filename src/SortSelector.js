import React from "react";
import "./styles.css";

const svgSortDescending = (
  <svg width="30" height="20" xmlns="http://www.w3.org/2000/svg">
    <g id="Layer_1">
      <title>Layer 1</title>
      <path transform="rotate(89.3179 14.8712 9.61325)" stroke="#000" id="svg_1" 
        d="m16.75921,9.61326l-11.05955,-13.35457l7.28358,0l11.05955,13.35457l-11.05955,13.35456l-7.28358,0l11.05955,-13.35456z" 
        fill="#000000"/>
    </g>
</svg>
);

const svgSortNotDescending = (<svg width="30.000000000000004" height="20" xmlns="http://www.w3.org/2000/svg">
<g id="Layer_1">
 <title>Layer 1</title>
 <path transform="rotate(-90.1106 15.0898 10.5322)" stroke="#000" id="svg_1" 
 d="m16.74355,10.53223l-9.68765,-13.40666l6.38008,0l9.68765,13.40666l-9.68765,13.40665l-6.38008,0l9.68765,-13.40665z" 
 fill="#000000"/>
</g>
</svg>);

const svgClose = (
  <svg width="29.999999999999996" height="17" xmlns="http://www.w3.org/2000/svg">
    <g id="Layer_1">
      <title>Layer 1</title>
      <path id="svg_1" d="m6.47691,6.39327l4.09803,-3.21835l4.35328,3.41878l4.35328,-3.41878l4.09807,
      3.21835l-4.35328,3.4188l4.35328,3.4188l-4.09807,3.21838l-4.35328,-3.4188l-4.35328,3.4188l-4.09803,
      -3.21838l4.35324,-3.4188l-4.35324,-3.4188z" stroke="#000" fill="#000000"/>
    </g>
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
          {sortType && svgSortDescending} {!sortType && svgSortNotDescending} {sortTitle}
        </span>
        <button className="headerButtonStyle" onClick={closeHandle}>
          {svgClose}
        </button>
      </div>
    );
  }
}
