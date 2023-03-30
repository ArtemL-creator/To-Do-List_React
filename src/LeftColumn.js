import React from "react";
import "./styles.css";

import { LeftColumnElem } from "./LeftColumnElem";

export class LeftColumn extends React.Component {
  render() {
    const leftHandler = this.props.leftHandler;

    const todayTaskCount = this.props.todayTaskCount;
    const importantTaskCount = this.props.importantTaskCount;
    const planedTaskCount = this.props.planedTaskCount;
    const allTaskCount = this.props.allTaskCount;

    const handleTodayTask = this.props.handleTodayTask;
    const handleImportantTask = this.props.handleImportantTask;
    const handlePlanedTask = this.props.handlePlanedTask;
    const handleAllTask = this.props.handleAllTask;

    return (
      <div className="leftColumn">
        <div className="header">
          <div className="headerButton">
            <button className="headerButtonStyle" onClick={leftHandler}>
              <svg
                width="30"
                height="20"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  stroke="black"
                  fill="transparent"
                  strokeWidth="5"
                />
              </svg>{" "}
            </button>
          </div>
        </div>
        <div className="leftColumnCenter">
          <div onClick={handleTodayTask}>
            <LeftColumnElem name={"Сегодняшние задачи"} count={20} />
          </div>

          <div onClick={handleImportantTask}>
            <LeftColumnElem name={"Важные задачи"} count={20} />
          </div>

          <div onClick={handlePlanedTask}>
            <LeftColumnElem name={"Запланированные задачи"} count={20} />
          </div>

          <div onClick={handleAllTask}>
            <LeftColumnElem name={"Все задачи"} count={20} />
          </div>
        </div>
      </div>
    );
  }
}
