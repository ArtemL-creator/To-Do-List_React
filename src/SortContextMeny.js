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
        <div onClick={handleDate}>По дате</div>
        <div onClick={handleTitle}>По названию</div>
        <div onClick={handleImportant}>По важности</div>
      </div>
    );
  }
}
