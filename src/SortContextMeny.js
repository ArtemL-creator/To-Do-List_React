import React from "react";
import "./styles.css";

export class SortContextMenu extends React.Component {
  render() {
    const x = this.props.x;
    const y = this.props.y;

    const handleDate = this.props.handleDate;
    const handleTitle = this.props.handleTitle;
    const handleImportant = this.props.handleImportant;

    return (
      <div
        className="sortContexMenu"
        style={{ position: "absolute", top: y, left: x }}
      >
        <div onClick={handleDate} className="sort-menu-hover">
          По дате
        </div>
        <div onClick={handleTitle} className="sort-menu-hover">
          По названию
        </div>
        <div onClick={handleImportant} className="sort-menu-hover">
          По важности
        </div>
      </div>
    );
  }
}
