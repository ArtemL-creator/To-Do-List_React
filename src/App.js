import "./styles.css";
import React from "react";
import { LeftColumn } from "./LeftColumn";
import { SortContextMenu } from "./SortContextMeny";
import { SortSelector } from "./SortSelector";


var counter = 0;

const svg = (
  <svg width="30" height="20" xmlns="http://www.w3.org/2000/svg">
    <g id="Layer_1">
      <title>Layer 1</title>
      <line stroke-linecap="undefined" stroke-linejoin="undefined" id="svg_5" y2="4.65466" x2="25.51051" y1="4.83484" x1="2.92793" stroke="#000" fill="none" />
      <line stroke-linecap="undefined" stroke-linejoin="undefined" id="svg_6" y2="10.18018" x2="25.87087" y1="10.36036" x1="3.16817" stroke="#000" fill="none" />
      <line stroke-linecap="undefined" stroke-linejoin="undefined" id="svg_7" y2="11.8018" x2="27.07207" y1="11.74174" x1="27.07207" stroke="#000" fill="none" />
      <line stroke-linecap="undefined" stroke-linejoin="undefined" id="svg_8" y2="16.24625" x2="25.69069" y1="16.48649" x1="3.70871" stroke="#000" fill="none" />
      <line stroke-linecap="undefined" stroke-linejoin="undefined" id="svg_9" y2="5.37538" x2="36.2012" y1="5.37538" x1="36.26126" stroke="#000" fill="none" />
      <line stroke-linecap="undefined" stroke-linejoin="undefined" id="svg_10" y2="-3.21321" x2="34.75976" y1="-3.21321" x1="34.6997" stroke="#000" fill="none" />
    </g>
  </svg>
);

const svgRollUpRightColumn = (<svg width="30" height="20" xmlns="http://www.w3.org/2000/svg">
  <g id="Layer_1">
    <title>Layer 1</title>
    <path id="svg_1" d="m5.34824,5.40693l0,0l0,-0.00166l0,0.00166zm0.00079,-0.00166l4.56917,
      4.78586l-4.56996,4.7842l1.68009,1.75998l6.25005,-6.54501l-6.25005,-6.54501l-1.67929,
      1.75998zm8.0964,11.21066l11.41619,0l0,-2.48619l-11.41619,0l0,2.48619zm3.43222,-5.1813l7.98397,
      0l0,-2.48619l-7.98397,0l0,2.48619zm-3.43222,-7.66832l0,2.48785l11.41619,0l0,-2.48785l-11.41619,0z"
      stroke="#000" fill="#000000" />
  </g>
</svg>);

const svgChangeSortType = (
  <svg width="30.000000000000004" height="17" xmlns="http://www.w3.org/2000/svg">
    <g id="Layer_1">
      <title>Layer 1</title>
      <path id="svg_1" d="m10.50051,9.05916c1.11218,1.49883 1.32931,1.954 0.96158,2.01582c-0.71833
      ,0.12075 -0.57398,0.81136 0.43144,2.06412c1.26091,1.5711 3.73065,2.53591 6.05049,2.36362c0.90043
      ,-0.06687 1.9184,-0.20488 2.26217,-0.30668c0.34376,-0.10181 0.13282,0.08785 -0.46877,0.42146c-3.00947
      ,1.6689 -6.72629,1.55264 -9.69151,-0.30312c-1.18229,-0.73993 -2.80893,-2.90181 -2.80893,-3.73319c0,-0.23552 -0.26818
      ,-0.46374 -0.59595,-0.50714c-0.53603,-0.07098 -0.46405,-0.25786 0.71601,-1.85884c0.72158,-0.97896 1.40082,-1.85015 1.50943
      ,-1.93597c0.10861,-0.08583 0.84393,0.71514 1.63404,1.77993l0,0zm9.56017,2.88956c-1.11218,-1.49883 -1.32931,-1.954 -0.96158
      ,-2.01582c0.71833,-0.12075 0.57398,-0.81135 -0.43144,-2.06412c-1.26091,-1.5711 -3.73065,-2.53591 -6.05049,-2.36362c-0.90043
      ,0.06687 -1.9184,0.20488 -2.26217,0.30669c-0.34376,0.10181 -0.13282,-0.08785 0.46877,-0.42146c3.00947,-1.6689 6.72629
      ,-1.55265 9.69151,0.30312c1.18229,0.73993 2.80893,2.9018 2.80893,3.73318c0,0.23553 0.26818,0.46374 0.59595,0.50714c0.53604
      ,0.07098 0.46405,0.25786 -0.716,1.85884c-0.72158,0.97896 -1.40082,1.85015 -1.50943,1.93597c-0.10862,0.08583 -0.84393
      ,-0.71514 -1.63404,-1.77993l0,0z" stroke="#000" fill="#000000" />
    </g>
  </svg>
);

const svgCow = (
  <svg width="29.999999999999996" height="20" xmlns="http://www.w3.org/2000/svg">
    <g id="Layer_1">
      <title>Layer 1</title>
      <path id="svg_1" d="m6.7307,17.30619c-0.85991,-0.07901 -0.01995,-1.30077 -0.3443,
        -1.8666c-0.00328,-0.83292 -0.34344,-1.65316 -0.23276,-2.48165c0.67672,-1.46066 0.1128,
        -3.05591 -0.03559,-4.56047c-0.06708,-0.33219 -0.06511,-1.18545 -0.23187,-0.42686c-0.46181,
        1.27902 -0.0107,2.85995 -0.40568,4.15531c-0.66015,0.72121 -1.15879,-0.42302 -0.52861,-0.86178c0.73624,
        -1.05352 0.5583,-2.47255 0.58305,-3.78615c-0.03169,-0.83056 0.33486,-1.8736 1.41968,-1.89728c0.92807,
        -0.0638 1.80688,0.33821 2.74314,0.28848c2.73065,0.03868 5.48823,0.06025 8.18432,-0.39206c1.34576,-0.28192 2.68555,
        0.21579 4.03342,0.01393c0.75744,0.07436 1.15815,-0.24758 0.82432,-0.85197c0.56419,-0.35381 0.9983,0.67096 1.24889,
        -0.2418c0.9086,-0.56921 1.03523,1.1112 2.04147,0.63661c1.21376,0.14298 -0.5274,1.12991 0.48885,1.62392c0.61442,
        0.43094 1.55532,1.49838 0.333,1.80604c-1.05091,-0.06709 -2.10421,-0.00443 -3.15575,0.04183c-0.48669,0.73875 -1.49907,
        1.29286 -1.38815,2.2609c-0.08407,1.15483 -0.97399,2.29339 -2.1922,2.65205c-0.52061,-0.09369 -0.74773,0.05933 -0.68268,
        0.54405c-0.26898,0.63339 -0.31639,1.30146 -0.28448,1.97522c-0.07962,0.37144 0.0896,0.66033 0.33021,0.94643c-0.28297,
        0.44567 -1.90426,0.18169 -1.29,-0.66146c0.15708,-1.10587 -0.02775,-2.21633 -0.16547,-3.31585c-0.64612,
        -0.41778 -1.42942,-0.26482 -2.08337,0.0709c-1.44266,0.48098 -3.11255,0.93638 -4.59229,0.31909c-0.82497,
        -0.20943 -2.06929,-0.36522 -2.68245,0.26733c-0.2759,0.95395 -0.20214,1.97845 -0.43733,2.94661c-0.00396,
        0.50618 0.52575,0.94076 -0.37165,0.7995c-0.37503,0.00783 -0.75108,0.01857 -1.12573,-0.00428l0,0zm0.76574,
        -1.07727c0.14759,-0.45334 -0.21288,-1.60509 -0.24378,-0.53083c-0.12278,0.34084 0.03337,1.97786 0.21679,
        0.89111c0.0116,-0.11992 0.01984,-0.24009 0.02699,-0.36028z" stroke="#000" fill="#000000" />
    </g>
  </svg>
);

const svgTaskSeparator = (<svg width="30" height="15" xmlns="http://www.w3.org/2000/svg">
  <g id="Layer_1">
    <title>Layer 1</title>
    <ellipse ry="2.34375" rx="2.71875" id="svg_1" cy="8.78125" cx="13.90625" stroke="#000" fill="#000000" />
  </g>
</svg>);

const deleteSvg = (
  <svg width="20px" height="20px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><g id="Layer_1">
    <title>Layer 1</title><path fill="#000000" d="M352 192V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64H96a32 32 0 0 1 0-64h256zm64 0h192v-64H416v64zM192 960a32 32 0 0 1-32-32V256h704v672a32 32 0 0 1-32 32H192zm224-192a32 32 0 0 0 32-32V416a32 32 0 0 0-64 0v320a32 32 0 0 0 32 32zm192 0a32 32 0 0 0 32-32V416a32 32 0 0 0-64 0v320a32 32 0 0 0 32 32z" /></g></svg>
);

export class App extends React.Component {
  state = {
    isLeftColumnVisible: true,
    isRightColumnVisible: true,
    taskGroupType: 1,
    sortContextMenuIsVisible: false,
    sortContextMenuX: 0,
    sortContextMenuY: 0,
    sortSelectorIsVisible: true,
    taskSortType: 1,
    isSortDescending: false,

    currentTaskTitle: "",
    currentTaskStart: "",
    currentTaskEnd: "",
    currentTaskIdx: 0,

    currentSubTaskDescription: "",
    editSubTaskDesc: "",
    isSubTaskEdit: false,
    editSubtaskNum: -1,
    selection: -1,

    tasks: [
      {
        title: "Очень секретная задача",
        description: "Чтобы сайт не ложился",
        start: "2023-04-01T20:20",
        finish: "2023-04-02T20:40",
        category: "",
        isImportant: true,
        isComplete: true,
        subtasks: [{ description: "", isComplete: false }]
      }
    ],

    showEarlier: false,
    showToday: false,
    showTomorrow: false,
    showAfterTomorrow: false,
    showInTheWeek: false,
    showLater: false,
  };

  componentWillUnmount() {
    console.log("unmount");
  }

  componentDidMount() {
    window.addEventListener("resize", this.onWindowResize);
    this.onWindowResize();


    fetch('http://localhost:8080/data')
      .then(response => response.json())
      .then(data => this.setState({ tasks: data }, this.sortFunction()));

    counter++;

    console.log("componentDidMount" + counter);
  }

  onWindowResize = () => {
    this.setState({ sortContextMenuIsVisible: false });
  };

  leftColumnAddHandler = () => {
    const tmp = !this.state.isLeftColumnVisible;
    this.setState({ isLeftColumnVisible: tmp });
  };

  rightColumnAddHandler = (idx) => {
    if (this.state.isRightColumnVisible === true) {
      this.setState({ currentTaskIdx: idx });
    } else {
      this.setState({ isRightColumnVisible: true, currentTaskIdx: idx });
    }

    console.log(idx);
  };

  rightColumnRemoveHandler = () => {
    this.setState({ curentTaskIdx: -1, isRightColumnVisible: false });
  };

  handleChooseTodayTask = () => {
    this.setState({ taskGroupType: 1, isRightColumnVisible: false });
    console.log("taskGroupType : 1");
  };

  handleChooseImportantTask = () => {
    this.setState({ taskGroupType: 2, isRightColumnVisible: false });
    console.log("taskGroupType : 2");
  };

  handleChoosePlanedTask = () => {
    this.setState({ taskGroupType: 3, isRightColumnVisible: false });
    console.log("taskGroupType : 3");
  };

  handleChooseAllTask = () => {
    this.setState({ taskGroupType: 4, isRightColumnVisible: false });
    console.log("taskGroupType : 4");
  };

  sortContextMenuHandler = (e) => {
    const res = !this.state.sortContextMenuShow;

    const parent = e.target.parentNode.getBoundingClientRect();

    const x = parent.left;
    const y = parent.bottom;

    this.setState({
      sortContextMenuIsVisible: res,
      sortContextMenuX: x - 20,
      sortContextMenuY: y
    });
  };

  closeSortContextMenuHandler = () => {
    if (this.state.sortContextMenuIsVisible === true) {
      this.setState({ sortContextMenuIsVisible: false });
    }
  };

  sortMenuHandleDate = () => {
    this.setState({
      sortContextMenuIsVisible: false,
      sortSelectorIsVisible: true,
      taskSortType: 1
    });
    console.log(1);

    this.sortFunction();
  };

  sortMenuHandleTitle = () => {
    this.setState({
      sortContextMenuIsVisible: false,
      sortSelectorIsVisible: true,
      taskSortType: 2
    });

    this.sortFunction();
    console.log(2);
  };

  sortMenuHandleImportant = () => {
    this.setState({
      sortContextMenuIsVisible: false,
      sortSelectorIsVisible: true,
      taskSortType: 3
    });
    console.log(3);

    this.sortFunction();
  };

  sortDescendingHandler = () => {
    const res = !this.state.isSortDescending;
    this.setState({ isSortDescending: res });
    console.log("change sort descending" + res);

    this.sortFunction();
  };

  closeSortSelectorHandler = () => {
    this.setState({
      sortSelectorIsVisible: false,
      isSortDescending: false,
      taskSortType: 1
    });

    this.sortFunction();
  };

  validateDateHandler = (date, idx) => {
    if (date < new Date()) {
      alert("Задача в прошлом времени");
      return true;
    }

    const arr = [...this.state.tasks];

    for (var i = 0; i < arr.length; i++) {
      if (i === idx) {
        continue;
      }
      var taskStart = new Date(arr[i].start);
      var taskEnd = new Date(arr[i].finish);

      if (date <= taskEnd && date >= taskStart) {
        alert(
          "Задача попала в интервал задачи " +
          arr[i].title +
          " со временем " +
          arr[i].start +
          " " +
          arr[i].finish
        );
        return true;
      }
    }
    return false;
  };

  validateInnerDateHandler = (curStart, curFinish, idx) => {
    const arr = [...this.state.tasks];

    for (var i = 0; i < arr.length; i++) {
      if (i === idx) {
        continue;
      }

      var taskStart = new Date(arr[i].start);
      var taskEnd = new Date(arr[i].finish);

      if (
        (curStart <= taskStart && taskStart <= curFinish) ||
        (curStart <= taskEnd && taskEnd <= curFinish)
      ) {
        alert(
          "Задача попала в интервал задачи " +
          arr[i].title +
          " со временем " +
          arr[i].start +
          " " +
          arr[i].finish
        );
        return true;
      }
    }
    return false;
  };

  selectStartDateHandler = (e) => {
    var curStart = new Date(e.target.value);

    if (this.state.currentTaskEnd !== "") {
      var curEnd = new Date(this.state.currentTaskEnd);

      if (curEnd <= curStart) {
        alert("Дата начала задачи позже даты конца");
        return;
      }

      if (this.validateInnerDateHandler(curStart, curEnd, -1)) {
        return;
      }
    }

    var isIntervalsMatch = this.validateDateHandler(curStart, -1);

    if (!isIntervalsMatch) {
      this.setState({ currentTaskStart: e.target.value });
    }
  };

  selectEndDateHandler = (e) => {
    var curEnd = new Date(e.target.value);

    if (this.state.currentTaskStart !== "") {
      var curStart = new Date(this.state.currentTaskStart);

      if (curEnd <= curStart) {
        alert("Дата начала задачи позже даты конца");
        return;
      }

      if (this.validateInnerDateHandler(curStart, curEnd, -1)) {
        return;
      }
    }

    var isIntervalsMatch = this.validateDateHandler(curEnd, -1);

    if (!isIntervalsMatch) {
      this.setState({ currentTaskEnd: e.target.value });
    }
  };

  createTitleTaskHandler = (e) => {
    this.setState({ currentTaskTitle: e.target.value });
  };

  addNewTaskHandler = () => {
    const arr = [...this.state.tasks];

    arr.push({
      title: this.state.currentTaskTitle,
      start: this.state.currentTaskStart,
      finish: this.state.currentTaskEnd,
      subtasks: [],
      category: "",
      isImportant: false,
      isComplete: false,
      description: ""
    });

    this.setState(
      {
        tasks: arr,
        currentTaskTitle: "",
        currentTaskStart: "",
        currentTaskEnd: ""
      },
      this.sortFunction(), fetch("http://localhost:8080/data", {
        method: "POST", mode: 'no-cors', headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.state.tasks, null, 2)
      })
    );
  };

  addNewSubTaskByKey = (e) => {
    if (e.keyCode === 13) {
      e.target.blur();
    } else if (e.keyCode === 27) {
      this.setState({ currentSubTaskDescription: "" });
    }
  };

  addNewSubTaskHandler = () => {
    var curSubTaskDesc = this.state.currentSubTaskDescription;

    if (curSubTaskDesc !== "" && curSubTaskDesc.trim() !== "") {
      curSubTaskDesc = curSubTaskDesc.replace(/^ +| +$|( ) +/g, "$1");
      const taskIdx = this.state.currentTaskIdx;
      const newTasks = [...this.state.tasks];
      const newSubtasks = [...newTasks[taskIdx].subtasks];

      newSubtasks.push({
        description: curSubTaskDesc,
        isComplete: false
      });

      newTasks[taskIdx].subtasks = newSubtasks;

      fetch("http://localhost:8080/data", {
        method: "POST", mode: 'no-cors', headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.state.tasks, null, 2)
      }).then(this.setState({ tasks: newTasks, currentSubTaskDescription: "" }));
    } else {
      this.setState({ currentSubTaskDescription: "" });
    }
  };

  changeSubTaskStatusHandler = (e, idx) => {
    const taskIdx = this.state.currentTaskIdx;
    const newTasks = [...this.state.tasks];
    const newSubtasks = [...newTasks[taskIdx].subtasks];
    newSubtasks[idx].isComplete = e.target.checked;

    newTasks[taskIdx].subtasks = newSubtasks;
    fetch("http://localhost:8080/data", {
      method: "POST", mode: 'no-cors', headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state.tasks, null, 2)
    }).then(this.setState({ tasks: newTasks }));
  };

  newSubTaskDescriptionHandler = (e) => {
    this.setState({ currentSubTaskDescription: e.target.value });
  };

  removeSubTaskHandler = (idx) => {
    const taskIdx = this.state.currentTaskIdx;
    const newTasks = [...this.state.tasks];
    const oldSubtasks = [...newTasks[taskIdx].subtasks];

    const newSubtasks = [];

    for (var i = 0; i < oldSubtasks.length; i++) {
      if (i !== idx) {
        newSubtasks.push(oldSubtasks[i]);
      }
    }

    newTasks[taskIdx].subtasks = newSubtasks;

    fetch("http://localhost:8080/data", {
      method: "POST", mode: 'no-cors', headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state.tasks, null, 2)
    }).then(this.setState({ tasks: newTasks }));
  };

  editSubTaskDescHandler = (e, idx) => {
    this.setState({ editSubTaskDesc: e.target.value });
  };

  editSubTaskDescOnFocus = (e, idx) => {
    e.target.setSelectionRange(this.state.selection, this.state.selection);
  };

  editSubTaskDescOnClickHandler = (e, idx) => {
    this.setState({
      editSubTaskDesc: e.target.value,
      isSubTaskEdit: true,
      editSubtaskNum: idx,
      selection: e.target.selectionStart
    });
  };

  editSubTaskDescOnBlurHandler = (idx) => {
    var editSubTaskDesc = this.state.editSubTaskDesc;

    if (editSubTaskDesc !== "" && editSubTaskDesc.trim() !== "") {
      editSubTaskDesc = editSubTaskDesc.replace(/^ +| +$|( ) +/g, "$1");
      const taskIdx = this.state.currentTaskIdx;
      const newTasks = [...this.state.tasks];
      const newSubtasks = [...newTasks[taskIdx].subtasks];
      newSubtasks[idx].description = editSubTaskDesc;

      fetch("http://localhost:8080/data", {
        method: "POST", mode: 'no-cors', headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.state.tasks, null, 2)
      }).then(this.setState({ tasks: newTasks }));
    }

    this.setState({ isSubTaskEdit: false });
  };

  editSubTaskByKey = (e, idx) => {
    if (e.keyCode === 13) {
      e.target.blur();
    } else if (e.keyCode === 27) {
      const taskIdx = this.state.currentTaskIdx;
      const newTasks = [...this.state.tasks];
      const newSubtasks = [...newTasks[taskIdx].subtasks];

      this.setState({ editSubTaskDesc: newSubtasks[idx].description });
    }
  };

  sortFunction = () => {
    var arr;

    if (this.state.taskSortType === 1) {
      if (!this.state.isSortDescending) {
        arr = [...this.state.tasks].sort((a, b) => {
          if (a.finish < b.finish) {
            return -1;
          }
          if (a.finish > b.finish) {
            return 1;
          }
          if (a.finish === b.finish) {
            return 0;
          }
        });
      } else {
        arr = [...this.state.tasks].sort((a, b) => {
          if (a.finish < b.finish) {
            return 1;
          }
          if (a.finish > b.finish) {
            return -1;
          }
          if (a.finish === b.finish) {
            return 0;
          }
        });
      }
      this.setState({ tasks: arr, isRightColumnVisible: false });
    } else if (this.state.taskSortType === 2) {
      if (!this.state.isSortDescending) {
        arr = [...this.state.tasks].sort((a, b) => {
          if (a.title < b.title) {
            return -1;
          }
          if (a.title > b.title) {
            return 1;
          }
          if (a.title === b.title) {
            return 0;
          }
        });
      } else {
        arr = [...this.state.tasks].sort((a, b) => {
          if (a.title < b.title) {
            return 1;
          }
          if (a.title > b.title) {
            return -1;
          }
          if (a.title === b.title) {
            return 0;
          }
        });
      }
      this.setState({ tasks: arr, isRightColumnVisible: false });
    } else {
      if (!this.state.isSortDescending) {
        arr = [...this.state.tasks].sort((a, b) => {
          if (a.isImportant < b.isImportant) {
            return -1;
          }
          if (a.isImportant > b.isImportant) {
            return 1;
          }
          if (a.isImportant === b.isImportant) {
            return 0;
          }
        });
      } else {
        arr = [...this.state.tasks].sort((a, b) => {
          if (a.isImportant < b.isImportant) {
            return 1;
          }
          if (a.isImportant > b.isImportant) {
            return -1;
          }
          if (a.isImportant === b.isImportant) {
            return 0;
          }
        });
      }
      console.log(arr);

      arr = [...arr];
      this.setState(
        { tasks: "arr", isRightColumnVisible: false },
        console.log(this.state.tasks)
      );
      this.setState(
        { tasks: arr, isRightColumnVisible: false },
        console.log(this.state.tasks)
      );
    }
  };

  editStartDateHandler = (e) => {
    if (e.target.value === "") {
      return;
    }

    const taskIdx = this.state.currentTaskIdx;
    const curStart = new Date(e.target.value);
    const curFinish = new Date(this.state.tasks[taskIdx].finish);

    if (curStart > curFinish) {
      alert("Время начала больше чем время конца задачи");
      return;
    }

    if (this.validateInnerDateHandler(curStart, curFinish, taskIdx)) {
      return;
    }

    var isIntervalsMatch = this.validateDateHandler(curStart, taskIdx);

    if (!isIntervalsMatch) {
      const newTasks = [...this.state.tasks];
      newTasks[taskIdx].start = e.target.value;
      fetch("http://localhost:8080/data", {
        method: "POST", mode: 'no-cors', headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.state.tasks, null, 2)
      }).then(this.setState({ tasks: newTasks }));
    }
  };

  editFinishDateHandler = (e) => {
    if (e.target.value === "") {
      return;
    }

    const taskIdx = this.state.currentTaskIdx;
    const curFinish = new Date(e.target.value);
    const curStart = new Date(this.state.tasks[taskIdx].start);

    if (curStart > curFinish) {
      alert("Время начала больше чем время конца задачи");
      return;
    }

    if (this.validateInnerDateHandler(curStart, curFinish, taskIdx)) {
      return;
    }

    var isIntervalsMatch = this.validateDateHandler(curFinish, taskIdx);

    if (!isIntervalsMatch) {
      const newTasks = [...this.state.tasks];
      newTasks[taskIdx].finish = e.target.value;
      fetch("http://localhost:8080/data", {
        method: "POST", mode: 'no-cors', headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.state.tasks, null, 2)
      }).then(this.setState({ tasks: newTasks }));
    }
  };

  editCategoryHandler = (e) => {
    const taskIdx = this.state.currentTaskIdx;
    const newTasks = [...this.state.tasks];
    const task = newTasks[taskIdx];
    task.category = e.target.value;
    newTasks[taskIdx] = task;
    fetch("http://localhost:8080/data", {
      method: "POST", mode: 'no-cors', headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state.tasks, null, 2)
    }).then(this.setState({ tasks: newTasks }));
  };

  editDescriptionHandler = (e) => {
    const taskIdx = this.state.currentTaskIdx;
    const newTasks = [...this.state.tasks];
    const task = newTasks[taskIdx];
    task.description = e.target.value;
    newTasks[taskIdx] = task;
    fetch("http://localhost:8080/data", {
      method: "POST", mode: 'no-cors', headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state.tasks, null, 2)
    }).then(this.setState({ tasks: newTasks }));
  };

  todayTaskFilter = (el) => {
    return (
      el.finish.split("T")[0] === new Date().toISOString().split("T")[0] &&
      !el.isComplete
    );
  };

  importantTaskFilter = (el) => {
    return el.isImportant && !el.isComplete;
  };

  planedTaskFilter = (el) => {
    return (
      el.finish.split("T")[0] > new Date().toISOString().split("T")[0] &&
      !el.isComplete
    );
  };

  allTaskFilter = (el) => {
    return !el.isComplete;
  };

  todayTaskFilterPaint = (el) => {
    return el.finish.split("T")[0] === new Date().toISOString().split("T")[0];
  };

  importantTaskFilterPaint = (el) => {
    return el.isImportant;
  };

  planedTaskFilterPaint = (el) => {
    return el.finish.split("T")[0] > new Date().toISOString().split("T")[0];
  };

  allTaskFilterPaint = (el) => {
    return true;
  };

  deleteTaskHandler = () => {
    var result = confirm("Удалить?");
    // const taskIdx = "", oldTasks = "", newTasks = ""
    if (result) {
      const taskIdx = this.state.currentTaskIdx;
      const oldTasks = [...this.state.tasks];
      const newTasks = [];


      for (var i = 0; i < oldTasks.length; i++) {
        if (i !== taskIdx) {
          newTasks.push(oldTasks[i]);
        }
      }


      fetch("http://localhost:8080/data", {
        method: "POST", mode: 'no-cors', headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newTasks, null, 2)
      }).then(this.setState({ tasks: newTasks, isRightColumnVisible: false }));
    }
  };

  taskCompleteHandler = (e, idx) => {
    const newTasks = [...this.state.tasks];

    newTasks[idx].isComplete = e.target.checked;
    fetch("http://localhost:8080/data", {
      method: "POST", mode: 'no-cors', headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTasks, null, 2)
    }).then(this.setState({ tasks: newTasks }));
  };

  sortChangeImportant = (arr) => {
    if (this.state.taskSortType === 3) {
      if (!this.state.isSortDescending) {
        arr = arr.sort((a, b) => {
          if (a.isImportant < b.isImportant) {
            return -1;
          }
          if (a.isImportant > b.isImportant) {
            return 1;
          }
          if (a.isImportant === b.isImportant) {
            return 0;
          }
        });
      } else {
        arr = arr.sort((a, b) => {
          if (a.isImportant < b.isImportant) {
            return 1;
          }
          if (a.isImportant > b.isImportant) {
            return -1;
          }
          if (a.isImportant === b.isImportant) {
            return 0;
          }
        });
      }
    }

    fetch("http://localhost:8080/data", {
      method: "POST", mode: 'no-cors', headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state.tasks, null, 2)
    }).then(this.setState({ tasks: arr, isRightColumnVisible: false }));
  };

  taskImportantHandler = (e, idx) => {
    const newTasks = [...this.state.tasks];
    const task = newTasks[idx];

    task.isImportant = e.target.checked;

    newTasks[idx] = task;
    this.sortChangeImportant(newTasks);
  };

  groupMapper = (arr) => {
    return arr.map((el) => (
      <div class="tasks"
      >
        <div class="desc" onClick={() => this.rightColumnAddHandler(el.index)}>
          <span>{this.state.tasks[el.index].title}</span>
        </div>
        <div style={{ display: "flex", flexGrow: 1, width: "100%" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div>
              Выполнено:
              <input
                type="checkbox"
                checked={this.state.tasks[el.index].isComplete}
                onChange={(e) =>
                  this.taskCompleteHandler(e, el.index)
                }
              />
            </div>
            <div>
              Важно:
              <input
                type="checkbox"
                checked={this.state.tasks[el.index].isImportant}
                onChange={(e) =>
                  this.taskImportantHandler(e, el.index)
                }
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            <div class="subDesc">
              <div>
                {svgTaskSeparator}
                {el.subtaskStatus}
              </div>
              <div>
                {svgTaskSeparator}
                {el.actual}
              </div>
              <div>
                {svgTaskSeparator}
                {el.category}
              </div>
            </div>
          </div>
        </div>
      </div>
    ))
  }

  mapTaskToView = (arr) => {
    const newArr = [];

    for (var i = 0; i < arr.length; i++) {
      const oldTask = this.state.tasks[arr[i]];

      var category = oldTask.category;

      if (category === "") {
        category = "Без категории";
      } else {
        category = category + " category";
      }

      var actual;
      const startTime = new Date(oldTask.start);
      const finishTime = new DataTransfer(oldTask.finish);
      if (new Date() < startTime) {
        actual = "В будущем";
      } else if (new Date() > finishTime) {
        actual = "В прошлом";
      } else {
        actual = "Актуально";
      }

      const totalSubtaskCount = oldTask.subtasks.length;
      const completeSubtaskCount = oldTask.subtasks.filter((el) => {
        return el.isComplete;
      }).length;

      var subtaskStatus;

      if (totalSubtaskCount === 0) {
        subtaskStatus = "Без подзадач";
      } else {
        subtaskStatus =
          String(completeSubtaskCount) + " из " + String(totalSubtaskCount);
      }

      newArr.push({
        index: arr[i],
        actual: actual,
        subtaskStatus: subtaskStatus,
        category: category
      });
    }

    return newArr;
  }

  render() {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    const afterTomorrow = new Date(tomorrow);
    afterTomorrow.setDate(tomorrow.getDate() + 1);
    const inTheWeek = new Date(afterTomorrow);
    inTheWeek.setDate(afterTomorrow.getDate() + 6);

    const numberArr = this.state.tasks.map((el, idx) => { return idx; });

    const arrEarlier = numberArr.filter(
      (el) => (this.state.tasks[el].start.slice(0, 10) < today.toISOString().split("T")[0])
    );

    const arrToday = numberArr.filter(
      (el) => (this.state.tasks[el].start.slice(0, 10) === today.toISOString().split("T")[0])
    );

    const arrTomorrow = numberArr.filter(
      (el) => (this.state.tasks[el].start.slice(0, 10) === tomorrow.toISOString().split("T")[0])
    );

    const arrAfterTomorrow = numberArr.filter(
      (el) => (this.state.tasks[el].start.slice(0, 10) === afterTomorrow.toISOString().split("T")[0])
    );

    const arrInTheWeek = numberArr.filter(
      (el) => (this.state.tasks[el].start.slice(0, 10) > afterTomorrow.toISOString().split("T")[0]
        && this.state.tasks[el].start <= inTheWeek.toISOString().split("T")[0])
    );

    const arrLater = numberArr.filter(
      (el) => (this.state.tasks[el].start.slice(0, 10) > inTheWeek.toISOString().split("T")[0])
    );

    const newArrEarlier = this.mapTaskToView(arrEarlier);
    const newArrToday = this.mapTaskToView(arrToday);
    const newArrTomorrow = this.mapTaskToView(arrTomorrow);
    const newArrAfterTomorrow = this.mapTaskToView(arrAfterTomorrow);
    const newArrInTheWeek = this.mapTaskToView(arrInTheWeek);
    const newArrLater = this.mapTaskToView(arrLater);

    var titleHeader;
    var filterFunction;
    if (this.state.taskGroupType === 1) {
      titleHeader = "Задачи на сегодня";
      filterFunction = (el) => this.todayTaskFilterPaint(el);
    } else if (this.state.taskGroupType === 2) {
      titleHeader = "Важно";
      filterFunction = (el) => this.importantTaskFilterPaint(el);
    } else if (this.state.taskGroupType === 3) {
      titleHeader = "В планах";
      filterFunction = (el) => this.planedTaskFilterPaint(el);
    } else {
      titleHeader = "Все";
      filterFunction = (el) => this.allTaskFilterPaint(el);
    }

    const oldIdxArr = numberArr.filter(el => (filterFunction(this.state.tasks[el])));
    const idxArr = this.mapTaskToView(oldIdxArr);

    var todayTaskCount = this.state.tasks.filter(this.todayTaskFilter).length;

    if (todayTaskCount === 0) {
      todayTaskCount = "";
    }

    var importantTaskCount = this.state.tasks.filter(this.importantTaskFilter)
      .length;

    if (importantTaskCount === 0) {
      importantTaskCount = "";
    }

    var planedTaskCount = this.state.tasks.filter(this.planedTaskFilter).length;

    if (planedTaskCount === 0) {
      planedTaskCount = "";
    }

    var allTaskCount = this.state.tasks.filter(this.allTaskFilter).length;

    if (allTaskCount === 0) {
      allTaskCount = "";
    }

    var titleSort;
    if (this.state.taskSortType === 1) {
      titleSort = "По дате";
    } else if (this.state.taskSortType === 2) {
      titleSort = "По названию";
    } else {
      titleSort = "По важности";
    }

    const curTaskIdx = this.state.currentTaskIdx;

    var isAddButtonActive =
      this.state.currentTaskEnd !== "" &&
      this.state.currentTaskStart !== "" &&
      this.state.currentTaskTitle !== "" &&
      this.state.currentTaskTitle.trim() !== "";

    return (
      <div>
        <div className="flexStyle" onClick={this.closeSortContextMenuHandler}>
          {this.state.isLeftColumnVisible && (
            <LeftColumn
              leftHandler={this.leftColumnAddHandler}
              handleTodayTask={this.handleChooseTodayTask}
              handleImportantTask={this.handleChooseImportantTask}
              handlePlanedTask={this.handleChoosePlanedTask}
              handleAllTask={this.handleChooseAllTask}
              todayTaskCount={todayTaskCount}
              importantTaskCount={importantTaskCount}
              planedTaskCount={planedTaskCount}
              allTaskCount={allTaskCount}
            />
          )}

          <div className="centerColumn">
            <div className="centerColumnHeader">
              <div className="centerColumnHeaderIcon">
                {!this.state.isLeftColumnVisible && (
                  <button
                    onClick={this.leftColumnAddHandler}
                    className="headerButtonStyle"
                  >
                    {svg}
                  </button>
                )}
                <span>
                  {svgCow}
                  {titleHeader}
                </span>
              </div>

              <div className="centerColumnSortDiv" id="1">
                <button
                  className="headerButtonStyle"
                  onClick={this.sortContextMenuHandler}
                >
                  {svgChangeSortType}Сортировка
                </button>
              </div>
            </div>
            <div className="sortSelectorDiv">
              {this.state.sortSelectorIsVisible && (
                <SortSelector
                  sortType={this.state.isSortDescending}
                  sortTitle={titleSort}
                  closeHandle={this.closeSortSelectorHandler}
                  sortHandler={this.sortDescendingHandler}
                />
              )}
            </div>

            <div className="addTaskDivInCenterColumn">
              <div
                style={{
                  height: "40%",
                  width: "80%"
                }}
              >
                <input className="data"
                  style={{
                    marginTop: 10,
                    height: "80%",
                    width: "100%",
                  }}
                  onChange={this.createTitleTaskHandler}
                  value={this.state.currentTaskTitle}
                  placeholder="Дорогой друг, вводи, пожалуйста, сюда название задачи"
                />
              </div>

              <div
                style={{
                  marginTop: 10,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "80%"
                }}
              >
                <div>
                  <div>
                    <h className="h"> Дата старта :</h>
                    <input className="data-1"
                      type="datetime-local"
                      onChange={this.selectStartDateHandler}
                      value={this.state.currentTaskStart}
                    />
                  </div>
                  <div>
                    <h className="h">Дата конца :</h>
                    <input className="data-1"
                      type="datetime-local"
                      value={this.state.currentTaskEnd}
                      onChange={this.selectEndDateHandler}
                    />
                  </div>
                </div>
                <div>
                  {isAddButtonActive && (
                    <button className="custom-btn btn-6" onClick={this.addNewTaskHandler}> Добавить </button>
                  )}
                  {!isAddButtonActive && (
                    <button disabled={true}> Добавить </button>
                  )}
                </div>
              </div>
            </div>

            {this.state.taskGroupType !== 4 && <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                overflowY: "scroll",
                flexGrow: 1
              }}
            >
              {this.groupMapper(idxArr)}
            </div>
            }

            {this.state.taskGroupType === 4 && <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                overflowY: "scroll",
                flexGrow: 1
              }}
            >

              {arrEarlier.length > 0 && <div class="centerElem-taskCard" onClick={() => this.setState({ showEarlier: !this.state.showEarlier })}>
                <div class="taskCard-Actions">
                  <button>{this.state.showEarlier ? '∨' : '>'}</button>
                </div>
                <div class="taskCard">
                  <div class="centerElemText">Раньше : </div>
                  <div class="centerElemCount">{arrEarlier.length}</div>
                </div>
              </div>}
              {(this.state.showEarlier && arrEarlier.length > 0) && this.groupMapper(newArrEarlier)}

              {arrToday.length > 0 && <div class="centerElem-taskCard" onClick={() => this.setState({ showToday: !this.state.showToday })}>
                <div class="taskCard-Actions">
                  <button>{this.state.showToday ? '∨' : '>'}</button>
                </div>
                <div class="taskCard">
                  <div class="centerElemText">Сегодня : </div>
                  <div class="centerElemCount">{arrToday.length}</div>
                </div>
              </div>}
              {(arrToday.length > 0 && this.state.showToday) && this.groupMapper(newArrToday)}

              {arrTomorrow > 0 && <div class="centerElem-taskCard" onClick={() => this.setState({ showTomorrow: !this.state.showTomorrow })}>
                <div class="taskCard-Actions">
                  <button>{this.state.showTomorrow ? '∨' : '>'}</button>
                </div>
                <div class="taskCard">
                  <div class="centerElemText">Завтра : </div>
                  <div class="centerElemCount">{arrTomorrow.length}</div>
                </div>
              </div>}
              {(arrTomorrow > 0 && this.state.showTomorrow) && this.groupMapper(newArrTomorrow)}

              {arrAfterTomorrow.length > 0 && <div class="centerElem-taskCard" onClick={() => this.setState({ showAfterTomorrow: !this.state.showAfterTomorrow })}>
                <div class="taskCard-Actions">
                  <button>{this.state.showAfterTomorrow ? '∨' : '>'}</button>
                </div>
                <div class="taskCard">
                  <div class="centerElemText">Послезавтра : </div>
                  <div class="centerElemCount">{arrAfterTomorrow.length}</div>
                </div>
              </div>}
              {(arrAfterTomorrow.length > 0 && this.state.showAfterTomorrow) && this.groupMapper(newArrAfterTomorrow)}

              {arrInTheWeek.length > 0 && <div class="centerElem-taskCard" onClick={() => this.setState({ showInTheWeek: !this.state.showInTheWeek })}>
                <div class="taskCard-Actions">
                  <button>{this.state.showInTheWeek ? '∨' : '>'}</button>
                </div>
                <div class="taskCard">
                  <div class="centerElemText">Следующая неделя : </div>
                  <div class="centerElemCount">{arrInTheWeek.length}</div>
                </div>
              </div>}
              {arrInTheWeek.length > 0 && this.state.showInTheWeek && this.groupMapper(newArrInTheWeek)}

              {arrLater.length > 0 && <div class="centerElem-taskCard" onClick={() => this.setState({ showLater: !this.state.showLater })}>
                <div class="taskCard-Actions">
                  <button>{this.state.showLater ? '∨' : '>'}</button>
                </div>
                <div class="taskCard">
                  <div class="centerElemText">Позже : </div>
                  <div class="centerElemCount">{arrLater.length}</div>
                </div>
              </div>}
              {(arrLater.length > 0 && this.state.showLater) && this.groupMapper(newArrLater)}
            </div>
            }
          </div>

          {this.state.isRightColumnVisible && (
            <div className="rightColumn">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  flexGrow: 1
                }}
              >
                <div
                  style={{
                    width: "80%",
                    height: 40,
                    display: "flex",
                    alignItems: "center"
                  }}
                >
                  {this.state.tasks[curTaskIdx].title}
                </div>
                <div
                  style={{
                    display: "flex",
                    width: "80%",
                    alignItems: "center"
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center"
                    }}
                  >
                    {this.state.tasks[curTaskIdx].subtasks.map((el, idx) => (
                      <div
                        style={{
                          width: "80%",
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                          alignItems: "center",
                          height: 30
                        }}
                      >
                        <div style={{ width: "15%" }}>
                          <input
                            type="checkbox"
                            checked={el.isComplete}
                            onClick={(e) =>
                              this.changeSubTaskStatusHandler(e, idx)
                            }
                          />
                        </div>
                        <div style={{ flexGrow: 1 }}>
                          {(!this.state.isSubTaskEdit ||
                            this.state.editSubtaskNum !== idx) && (
                              <input
                                style={{ width: "90%" }}
                                value={el.description}
                                onClick={(e) =>
                                  this.editSubTaskDescOnClickHandler(e, idx)
                                }
                              ></input>
                            )}
                          {this.state.isSubTaskEdit &&
                            this.state.editSubtaskNum === idx && (
                              <input
                                style={{ width: "90%" }}
                                value={this.state.editSubTaskDesc}
                                onFocus={(e) =>
                                  this.editSubTaskDescOnFocus(e, idx)
                                }
                                onChange={(e) =>
                                  this.editSubTaskDescHandler(e, idx)
                                }
                                onBlur={() =>
                                  this.editSubTaskDescOnBlurHandler(idx)
                                }
                                onKeyDown={(e) => this.editSubTaskByKey(e, idx)}
                                autoFocus
                              ></input>
                            )}
                        </div>
                        <div
                          style={{ width: "10%" }}
                          onClick={() => this.removeSubTaskHandler(idx)}
                        >
                          <button>x</button>
                        </div>
                      </div>
                    ))}
                    <div style={{ width: "80%" }}>
                      <input
                        style={{ width: "100%" }}
                        placeholder="Добавляем подзадачу?"
                        onChange={this.newSubTaskDescriptionHandler}
                        value={this.state.currentSubTaskDescription}
                        onBlur={this.addNewSubTaskHandler}
                        onKeyDown={this.addNewSubTaskByKey}
                      ></input>
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    width: "80%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                  }}
                >
                  <div style={{ width: "80%", marginTop: 10 }}> Описание: </div>
                  <div style={{ width: "80%" }}>
                    <input
                      style={{ width: "100%" }}
                      onChange={this.editDescriptionHandler}
                      value={
                        this.state.tasks[this.state.currentTaskIdx].description
                      }
                    />
                  </div>
                </div>

                <div
                  style={{
                    width: "80%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                  }}
                >
                  <div style={{ width: "80%", marginTop: 10 }}>
                    Дата начала:
                  </div>
                  <div style={{ width: "80%" }}>
                    <input
                      style={{ width: "100%" }}
                      type="datetime-local"
                      value={this.state.tasks[this.state.currentTaskIdx].start}
                      onChange={(e) => this.editStartDateHandler(e)}
                    />
                  </div>
                  <div style={{ width: "80%", marginTop: 10 }}>Дата конца:</div>
                  <div style={{ width: "80%" }}>
                    <input
                      style={{ width: "100%" }}
                      type="datetime-local"
                      value={this.state.tasks[this.state.currentTaskIdx].finish}
                      onChange={(e) => this.editFinishDateHandler(e)}
                    />
                  </div>
                </div>

                <div
                  style={{
                    width: "80%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                  }}
                >
                  <div style={{ width: "80%", marginTop: 10 }}>Категория:</div>
                  <div style={{ width: "80%" }}>
                    <select
                      style={{ width: "100%" }}
                      value={
                        this.state.tasks[this.state.currentTaskIdx].category
                      }
                      onChange={this.editCategoryHandler}
                    >
                      <option></option>
                      <option>orange</option>
                      <option>yellow</option>
                      <option>blue</option>
                      <option>purple</option>
                      <option>red</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="footer">
                <div className="rightColumnFooterButtonDiv">
                  <button
                    onClick={this.rightColumnRemoveHandler}
                    className="headerButtonStyle"
                  >
                    {svgRollUpRightColumn}
                  </button>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <button
                    onClick={this.deleteTaskHandler}
                    className="headerButtonStyle"
                  >
                    {deleteSvg}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        <div>
          {this.state.sortContextMenuIsVisible && (
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
