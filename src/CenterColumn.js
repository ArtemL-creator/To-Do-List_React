import React from "react";
import "./styles.css";
import { SortContextMenu } from "./SortContextMeny";

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

export class CenterColumn extends React.Component {
  render() {
    const isLeftColumn = this.props.isLeftColumn;
    const isRightColumn = this.props.isRightColumn;

    const leftHandler = this.props.leftHandler;
    const rightHandler = this.props.rightHandler;

    const typeTask = this.props.typeTask;
    const sortHandler = this.props.sortHandler;

    return (
      <div className="centerColumn">
        <div className="centerColumnHeader">
          <div className="centerColumnHeaderIcon">
            {!isLeftColumn && (
              <button onClick={leftHandler} className="headerButtonStyle">
                {svg}
              </button>
            )}
            {typeTask === 1 && (
              <span>
                {svg}
                Задачи на сегодня
              </span>
            )}
            {typeTask === 2 && (
              <span>
                {svg}
                Важно
              </span>
            )}
            {typeTask === 3 && <span>{svg}В планах</span>}
            {typeTask === 4 && (
              <span>
                {svg}
                Все
              </span>
            )}
          </div>
          <div></div>
          <div className="centerColumnSortDiv" id="1">
            <button className="headerButtonStyle" onClick={sortHandler}>
              {svg}Сортировка
            </button>
          </div>
          {!isRightColumn && (
            <button onClick={rightHandler}>Добавить правую колонну</button>
          )}
        </div>
      </div>
    );
  }
}
