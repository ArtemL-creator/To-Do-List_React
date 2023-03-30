import "./styles.css";
import React from "react";
import { LeftColumn } from "./LeftColumn";
import { CenterColumn } from "./CenterColumn";
import { RightColumn } from "./RightColumn";
import { SortContextMenu } from "./SortContextMeny";

export class App extends React.Component {
  state = {
    isLeftColumn: true,
    isRightColumn: true,
    switchTypeTask: 1,
    sortContextMenuShow: false,
    sortContextMenuX: 0,
    sortContextMenuY: 0,
    sortTypeIsActive: false,
    sortType: 1
  };

  componentDidMount() {
    window.addEventListener("resize", this.onResize);
    this.onResize();
  }

  onResize = () => {
    this.setState({ sortContextMenuShow: false });
  };

  leftHandler = () => {
    const tmp = !this.state.isLeftColumn;
    this.setState({ isLeftColumn: tmp });
  };

  rightHandler = () => {
    const tmp = !this.state.isRightColumn;
    this.setState({ isRightColumn: tmp });
  };

  handleTodayTask = () => {
    this.setState({ switchTypeTask: 1 });
    console.log("switchTypeTask : 1");
  };

  handleImportantTask = () => {
    this.setState({ switchTypeTask: 2 });
    console.log("switchTypeTask : 2");
  };

  handlePlanedTask = () => {
    this.setState({ switchTypeTask: 3 });
    console.log("switchTypeTask : 3");
  };

  handleAllTask = () => {
    this.setState({ switchTypeTask: 4 });
    console.log("switchTypeTask : 4");
  };

  sortHandler = (e) => {
    const res = !this.state.sortContextMenuShow;

    const parent = e.target.parentNode.getBoundingClientRect();

    const x = parent.left;
    const y = parent.bottom;

    this.setState({
      sortContextMenuShow: res,
      sortContextMenuX: x,
      sortContextMenuY: y
    });
  };

  cancelSortHandler = () => {
    if (this.state.sortContextMenuShow === true) {
      this.setState({ sortContextMenuShow: false });
    }
  };

  sortMenuHandleDate = () => {
    this.setState({
      sortContextMenuShow: false,
      sortTypeIsActive: true,
      sortType: 1
    });
    console.log(1);
  };

  sortMenuHandleTitle = () => {
    this.setState({
      sortContextMenuShow: false,
      sortTypeIsActive: true,
      sortType: 2
    });
    console.log(2);
  };

  sortMenuHandleImportant = () => {
    this.setState({
      sortContextMenuShow: false,
      sortTypeIsActive: true,
      sortType: 3
    });
    console.log(3);
  };

  render() {
    return (
      <div>
        <div className="flexStyle" onClick={this.cancelSortHandler}>
          {this.state.isLeftColumn && (
            <LeftColumn
              leftHandler={this.leftHandler}
              handleTodayTask={this.handleTodayTask}
              handleImportantTask={this.handleImportantTask}
              handlePlanedTask={this.handlePlanedTask}
              handleAllTask={this.handleAllTask}
            />
          )}

          <CenterColumn
            isLeftColumn={this.state.isLeftColumn}
            isRightColumn={this.state.isRightColumn}
            leftHandler={this.leftHandler}
            rightHandler={this.rightHandler}
            typeTask={this.state.switchTypeTask}
            sortHandler={this.sortHandler}
          />

          {this.state.isRightColumn && (
            <RightColumn rightHandler={this.rightHandler} />
          )}
        </div>
        <div>
          {this.state.sortContextMenuShow && (
            <SortContextMenu
              x={this.state.sortContextMenuX}
              y={this.state.sortContextMenuY}
              handleDate={this.sortMenuHandleDate}
              handleTitle={this.sortMenuHandleTitle}
              handleImportant={this.sortMenuHandleImportant}
            />
          )}
        </div>
      </div>
    );
  }
}
