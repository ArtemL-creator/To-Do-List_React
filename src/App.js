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
      <line
        stroke-linecap="undefined"
        stroke-linejoin="undefined"
        id="svg_5"
        y2="4.65466"
        x2="25.51051"
        y1="4.83484"
        x1="2.92793"
        stroke="#000"
        fill="none"
      />
      <line
        stroke-linecap="undefined"
        stroke-linejoin="undefined"
        id="svg_6"
        y2="10.18018"
        x2="25.87087"
        y1="10.36036"
        x1="3.16817"
        stroke="#000"
        fill="none"
      />
      <line
        stroke-linecap="undefined"
        stroke-linejoin="undefined"
        id="svg_7"
        y2="11.8018"
        x2="27.07207"
        y1="11.74174"
        x1="27.07207"
        stroke="#000"
        fill="none"
      />
      <line
        stroke-linecap="undefined"
        stroke-linejoin="undefined"
        id="svg_8"
        y2="16.24625"
        x2="25.69069"
        y1="16.48649"
        x1="3.70871"
        stroke="#000"
        fill="none"
      />
      <line
        stroke-linecap="undefined"
        stroke-linejoin="undefined"
        id="svg_9"
        y2="5.37538"
        x2="36.2012"
        y1="5.37538"
        x1="36.26126"
        stroke="#000"
        fill="none"
      />
      <line
        stroke-linecap="undefined"
        stroke-linejoin="undefined"
        id="svg_10"
        y2="-3.21321"
        x2="34.75976"
        y1="-3.21321"
        x1="34.6997"
        stroke="#000"
        fill="none"
      />
    </g>
  </svg>
);

const svgRollUpRightColumn = (
  <svg width="30" height="20" xmlns="http://www.w3.org/2000/svg">
    <g id="Layer_1">
      <title>Layer 1</title>
      <path
        id="svg_1"
        d="m5.34824,5.40693l0,0l0,-0.00166l0,0.00166zm0.00079,-0.00166l4.56917,
      4.78586l-4.56996,4.7842l1.68009,1.75998l6.25005,-6.54501l-6.25005,-6.54501l-1.67929,
      1.75998zm8.0964,11.21066l11.41619,0l0,-2.48619l-11.41619,0l0,2.48619zm3.43222,-5.1813l7.98397,
      0l0,-2.48619l-7.98397,0l0,2.48619zm-3.43222,-7.66832l0,2.48785l11.41619,0l0,-2.48785l-11.41619,0z"
        stroke="#000"
        fill="#000000"
      />
    </g>
  </svg>
);

const svgChangeSortType = (
  <svg
    width="30.000000000000004"
    height="17"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="Layer_1">
      <title>Layer 1</title>
      <path
        id="svg_1"
        d="m10.50051,9.05916c1.11218,1.49883 1.32931,1.954 0.96158,2.01582c-0.71833
      ,0.12075 -0.57398,0.81136 0.43144,2.06412c1.26091,1.5711 3.73065,2.53591 6.05049,2.36362c0.90043
      ,-0.06687 1.9184,-0.20488 2.26217,-0.30668c0.34376,-0.10181 0.13282,0.08785 -0.46877,0.42146c-3.00947
      ,1.6689 -6.72629,1.55264 -9.69151,-0.30312c-1.18229,-0.73993 -2.80893,-2.90181 -2.80893,-3.73319c0,-0.23552 -0.26818
      ,-0.46374 -0.59595,-0.50714c-0.53603,-0.07098 -0.46405,-0.25786 0.71601,-1.85884c0.72158,-0.97896 1.40082,-1.85015 1.50943
      ,-1.93597c0.10861,-0.08583 0.84393,0.71514 1.63404,1.77993l0,0zm9.56017,2.88956c-1.11218,-1.49883 -1.32931,-1.954 -0.96158
      ,-2.01582c0.71833,-0.12075 0.57398,-0.81135 -0.43144,-2.06412c-1.26091,-1.5711 -3.73065,-2.53591 -6.05049,-2.36362c-0.90043
      ,0.06687 -1.9184,0.20488 -2.26217,0.30669c-0.34376,0.10181 -0.13282,-0.08785 0.46877,-0.42146c3.00947,-1.6689 6.72629
      ,-1.55265 9.69151,0.30312c1.18229,0.73993 2.80893,2.9018 2.80893,3.73318c0,0.23553 0.26818,0.46374 0.59595,0.50714c0.53604
      ,0.07098 0.46405,0.25786 -0.716,1.85884c-0.72158,0.97896 -1.40082,1.85015 -1.50943,1.93597c-0.10862,0.08583 -0.84393
      ,-0.71514 -1.63404,-1.77993l0,0z"
        stroke="#000"
        fill="#000000"
      />
    </g>
  </svg>
);

const svgCow = (
  <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
    width="40px" viewBox="0 0 1280.000000 640.000000"
    preserveAspectRatio="xMidYMid meet">
    <metadata>
      Created by potrace 1.15, written by Peter Selinger 2001-2017
    </metadata>
    <g transform="translate(0.000000,640.000000) scale(0.100000,-0.100000)"
      fill="#000000" stroke="none">
      <path d="M1011 6107 c97 -185 180 -448 182 -576 1 -89 -8 -110 -67 -150 -86
-60 -153 -188 -181 -346 -19 -108 -19 -171 -1 -256 28 -131 89 -219 184 -266
52 -25 67 -28 167 -28 90 0 123 5 180 24 91 31 222 97 309 155 38 25 71 46 75
46 15 0 361 -143 361 -149 0 -14 -269 -311 -410 -451 -260 -261 -454 -400
-870 -627 -368 -200 -512 -271 -633 -307 -162 -49 -211 -72 -251 -116 -58 -65
-69 -137 -35 -250 10 -33 21 -46 53 -63 36 -19 56 -22 156 -21 126 0 208 17
294 61 74 37 130 79 321 238 269 225 321 257 535 332 160 56 328 139 505 249
176 110 212 124 318 124 46 0 144 5 218 10 330 26 540 82 808 217 90 45 160
79 155 74 -5 -5 -70 -47 -144 -93 -74 -47 -162 -102 -194 -123 l-59 -38 34
-13 c43 -17 584 -198 989 -332 631 -208 944 -302 1091 -331 314 -60 804 -101
1739 -146 162 -7 296 -13 297 -11 2 1 -2 39 -7 83 -7 51 -7 89 -1 104 5 13 10
19 10 13 1 -6 10 -55 21 -109 50 -238 304 -649 560 -906 134 -135 226 -206
380 -294 252 -144 627 -264 956 -306 l91 -11 53 -147 c136 -379 248 -624 326
-710 86 -95 224 -191 552 -380 181 -105 231 -114 302 -55 39 33 66 86 75 146
12 78 -5 108 -114 202 -109 94 -190 181 -373 402 -174 210 -209 265 -265 412
-25 66 -85 293 -80 299 2 1 28 -61 58 -138 l54 -142 150 -58 c197 -78 620
-231 715 -259 154 -46 210 -23 218 90 5 73 -11 138 -49 189 -24 34 -74 62
-421 234 -216 107 -481 236 -588 287 -226 106 -194 78 -453 400 -280 348 -475
616 -559 770 -95 172 -118 402 -71 705 8 55 20 106 26 114 16 20 389 199 517
249 58 22 132 45 166 51 41 8 281 10 740 9 741 -3 820 1 1104 58 428 86 869
277 1385 601 178 112 213 161 171 241 -41 78 -134 125 -249 126 -78 0 -79 -1
-217 -72 -297 -154 -762 -316 -1310 -456 -314 -80 -541 -93 -955 -56 -537 48
-714 38 -1055 -60 -312 -91 -498 -161 -623 -237 l-58 -35 -192 51 c-923 244
-2053 501 -2752 625 -206 37 -916 148 -1505 237 -1145 171 -1495 234 -1725
310 -228 75 -624 292 -998 545 -92 63 -169 114 -171 114 -2 0 14 -33 35 -73z"/>
      <path d="M2840 3763 c-19 -2 -133 -17 -253 -34 -138 -18 -261 -29 -336 -29
-105 0 -122 -3 -167 -25 -70 -35 -97 -67 -140 -165 -99 -229 -219 -412 -458
-699 -149 -178 -166 -204 -166 -253 0 -133 258 -195 379 -91 47 40 66 75 176
323 115 259 178 364 270 449 114 105 211 115 395 41 245 -98 281 -96 495 39
133 84 375 252 375 260 0 4 -51 24 -112 46 -62 21 -180 62 -262 91 -81 30
-151 53 -155 52 -3 0 -22 -3 -41 -5z"/>
    </g>
  </svg>
);

const svgTaskSeparator = (
  <svg width="30" height="15" xmlns="http://www.w3.org/2000/svg">
    <g id="Layer_1">
      <title>Layer 1</title>
      <ellipse
        ry="2.34375"
        rx="2.71875"
        id="svg_1"
        cy="8.78125"
        cx="13.90625"
        stroke="#000"
        fill="#000000"
      />
    </g>
  </svg>
);

const deleteSvg = (
  <svg
    width="20px"
    height="20px"
    viewBox="0 0 1024 1024"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="Layer_1">
      <title>Layer 1</title>
      <path
        fill="#000000"
        d="M352 192V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64H96a32 32 0 0 1 0-64h256zm64 0h192v-64H416v64zM192 960a32 32 0 0 1-32-32V256h704v672a32 32 0 0 1-32 32H192zm224-192a32 32 0 0 0 32-32V416a32 32 0 0 0-64 0v320a32 32 0 0 0 32 32zm192 0a32 32 0 0 0 32-32V416a32 32 0 0 0-64 0v320a32 32 0 0 0 32 32z"
      />
    </g>
  </svg>
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
        subtasks: [{ description: "", isComplete: false }],
      },
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

    fetch("http://localhost:8080/data")
      .then((response) => response.json())
      .then((data) => this.setState({ tasks: data }, this.sortFunction()));

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
      sortContextMenuY: y,
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
      taskSortType: 1,
    });
    console.log(1);

    this.sortFunction();
  };

  sortMenuHandleTitle = () => {
    this.setState({
      sortContextMenuIsVisible: false,
      sortSelectorIsVisible: true,
      taskSortType: 2,
    });

    this.sortFunction();
    console.log(2);
  };

  sortMenuHandleImportant = () => {
    this.setState({
      sortContextMenuIsVisible: false,
      sortSelectorIsVisible: true,
      taskSortType: 3,
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
      taskSortType: 1,
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
        alert("Время начала задачи позже времени конца");
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
        alert("Время начала задачи позже времени конца");
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
      description: "",
    });

    this.setState(
      {
        tasks: arr,
        currentTaskTitle: "",
        currentTaskStart: "",
        currentTaskEnd: "",
      },
      this.sortFunction(),
      fetch("http://localhost:8080/data", {
        method: "POST",
        mode: "no-cors",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.state.tasks, null, 2),
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
        isComplete: false,
      });

      newTasks[taskIdx].subtasks = newSubtasks;

      fetch("http://localhost:8080/data", {
        method: "POST",
        mode: "no-cors",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.state.tasks, null, 2),
      }).then(
        this.setState({ tasks: newTasks, currentSubTaskDescription: "" })
      );
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
      method: "POST",
      mode: "no-cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state.tasks, null, 2),
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
      method: "POST",
      mode: "no-cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state.tasks, null, 2),
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
      selection: e.target.selectionStart,
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
        method: "POST",
        mode: "no-cors",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.state.tasks, null, 2),
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
        method: "POST",
        mode: "no-cors",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.state.tasks, null, 2),
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
        method: "POST",
        mode: "no-cors",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.state.tasks, null, 2),
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
      method: "POST",
      mode: "no-cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state.tasks, null, 2),
    }).then(this.setState({ tasks: newTasks }));
  };

  editDescriptionHandler = (e) => {
    const taskIdx = this.state.currentTaskIdx;
    const newTasks = [...this.state.tasks];
    const task = newTasks[taskIdx];
    task.description = e.target.value;
    newTasks[taskIdx] = task;
    fetch("http://localhost:8080/data", {
      method: "POST",
      mode: "no-cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state.tasks, null, 2),
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
        method: "POST",
        mode: "no-cors",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTasks, null, 2),
      }).then(this.setState({ tasks: newTasks, isRightColumnVisible: false }));
    }
  };

  taskCompleteHandler = (e, idx) => {
    const newTasks = [...this.state.tasks];

    newTasks[idx].isComplete = e.target.checked;
    fetch("http://localhost:8080/data", {
      method: "POST",
      mode: "no-cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTasks, null, 2),
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
      method: "POST",
      mode: "no-cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state.tasks, null, 2),
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
      <div class="tasks">
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
                onChange={(e) => this.taskCompleteHandler(e, el.index)}
              />
            </div>
            <div>
              Важно:
              <input
                type="checkbox"
                id="checkbox-2"
                checked={this.state.tasks[el.index].isImportant}
                onChange={(e) => this.taskImportantHandler(e, el.index)}
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div class="subDesc">
              <div className="subDesc-desc">{el.subtaskStatus}</div>
              <div className="subDesc-desc">{el.actual}</div>
              <div className="subDesc-desc">{el.category}</div>
            </div>
          </div>
        </div>
      </div>
    ));
  };

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
        category: category,
      });
    }

    return newArr;
  };

  render() {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    const afterTomorrow = new Date(tomorrow);
    afterTomorrow.setDate(tomorrow.getDate() + 1);
    const inTheWeek = new Date(afterTomorrow);
    inTheWeek.setDate(afterTomorrow.getDate() + 6);

    const numberArr = this.state.tasks.map((el, idx) => {
      return idx;
    });

    const arrEarlier = numberArr.filter(
      (el) =>
        this.state.tasks[el].start.slice(0, 10) <
        today.toISOString().split("T")[0]
    );

    const arrToday = numberArr.filter(
      (el) =>
        this.state.tasks[el].start.slice(0, 10) ===
        today.toISOString().split("T")[0]
    );

    const arrTomorrow = numberArr.filter(
      (el) =>
        this.state.tasks[el].start.slice(0, 10) ===
        tomorrow.toISOString().split("T")[0]
    );

    const arrAfterTomorrow = numberArr.filter(
      (el) =>
        this.state.tasks[el].start.slice(0, 10) ===
        afterTomorrow.toISOString().split("T")[0]
    );

    const arrInTheWeek = numberArr.filter(
      (el) =>
        this.state.tasks[el].start.slice(0, 10) >
        afterTomorrow.toISOString().split("T")[0] &&
        this.state.tasks[el].start <= inTheWeek.toISOString().split("T")[0]
    );

    const arrLater = numberArr.filter(
      (el) =>
        this.state.tasks[el].start.slice(0, 10) >
        inTheWeek.toISOString().split("T")[0]
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

    const oldIdxArr = numberArr.filter((el) =>
      filterFunction(this.state.tasks[el])
    );
    const idxArr = this.mapTaskToView(oldIdxArr);

    var todayTaskCount = this.state.tasks.filter(this.todayTaskFilter).length;

    if (todayTaskCount === 0) {
      todayTaskCount = "";
    }

    var importantTaskCount = this.state.tasks.filter(
      this.importantTaskFilter
    ).length;

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
                <span className="taskNameChange">
                  {svgCow}
                  <span className="taskNameChangep">{titleHeader}</span>
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
                  width: "80%",
                }}
              >
                <input
                  id="main-input"
                  className="data"
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
                  width: "80%",
                }}
              >
                <div>
                  <div>
                    <h className="h">Старт задачи :</h>
                    <input
                      className="data-1"
                      type="datetime-local"
                      onChange={this.selectStartDateHandler}
                      value={this.state.currentTaskStart}
                    />
                  </div>
                  <div>
                    <h className="h">Конец задачи :</h>
                    <input
                      className="data-1"
                      type="datetime-local"
                      value={this.state.currentTaskEnd}
                      onChange={this.selectEndDateHandler}
                    />
                  </div>
                </div>
                <div>
                  {isAddButtonActive && (
                    <button
                      className="custom-btn btn-6"
                      onClick={this.addNewTaskHandler}
                    >
                      {" "}
                      Добавить{" "}
                    </button>
                  )}
                  {!isAddButtonActive && (
                    <button disabled={true}> Добавить </button>
                  )}
                </div>
              </div>
            </div>

            {this.state.taskGroupType !== 4 && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  overflowY: "scroll",
                  flexGrow: 1,
                }}
              >
                {this.groupMapper(idxArr)}
              </div>
            )}

            {this.state.taskGroupType === 4 && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  overflowY: "scroll",
                  flexGrow: 1,
                }}
              >
                {arrEarlier.length > 0 && (
                  <div
                    class="centerElem-taskCard"
                    onClick={() =>
                      this.setState({ showEarlier: !this.state.showEarlier })
                    }
                  >
                    <div class="taskCard-Actions">
                      <button>{this.state.showEarlier ? "∨" : ">"}</button>
                    </div>
                    <div class="taskCard">
                      <div class="centerElemText">Раньше : </div>
                      <div class="centerElemCount">{arrEarlier.length}</div>
                    </div>
                  </div>
                )}
                {this.state.showEarlier &&
                  arrEarlier.length > 0 &&
                  this.groupMapper(newArrEarlier)}

                {arrToday.length > 0 && (
                  <div
                    class="centerElem-taskCard"
                    onClick={() =>
                      this.setState({ showToday: !this.state.showToday })
                    }
                  >
                    <div class="taskCard-Actions">
                      <button>{this.state.showToday ? "∨" : ">"}</button>
                    </div>
                    <div class="taskCard">
                      <div class="centerElemText">Сегодня : </div>
                      <div class="centerElemCount">{arrToday.length}</div>
                    </div>
                  </div>
                )}
                {arrToday.length > 0 &&
                  this.state.showToday &&
                  this.groupMapper(newArrToday)}

                {arrTomorrow > 0 && (
                  <div
                    class="centerElem-taskCard"
                    onClick={() =>
                      this.setState({ showTomorrow: !this.state.showTomorrow })
                    }
                  >
                    <div class="taskCard-Actions">
                      <button>{this.state.showTomorrow ? "∨" : ">"}</button>
                    </div>
                    <div class="taskCard">
                      <div class="centerElemText">Завтра : </div>
                      <div class="centerElemCount">{arrTomorrow.length}</div>
                    </div>
                  </div>
                )}
                {arrTomorrow > 0 &&
                  this.state.showTomorrow &&
                  this.groupMapper(newArrTomorrow)}

                {arrAfterTomorrow.length > 0 && (
                  <div
                    class="centerElem-taskCard"
                    onClick={() =>
                      this.setState({
                        showAfterTomorrow: !this.state.showAfterTomorrow,
                      })
                    }
                  >
                    <div class="taskCard-Actions">
                      <button>
                        {this.state.showAfterTomorrow ? "∨" : ">"}
                      </button>
                    </div>
                    <div class="taskCard">
                      <div class="centerElemText">Послезавтра : </div>
                      <div class="centerElemCount">
                        {arrAfterTomorrow.length}
                      </div>
                    </div>
                  </div>
                )}
                {arrAfterTomorrow.length > 0 &&
                  this.state.showAfterTomorrow &&
                  this.groupMapper(newArrAfterTomorrow)}

                {arrInTheWeek.length > 0 && (
                  <div
                    class="centerElem-taskCard"
                    onClick={() =>
                      this.setState({
                        showInTheWeek: !this.state.showInTheWeek,
                      })
                    }
                  >
                    <div class="taskCard-Actions">
                      <button>{this.state.showInTheWeek ? "∨" : ">"}</button>
                    </div>
                    <div class="taskCard">
                      <div class="centerElemText">Следующая неделя : </div>
                      <div class="centerElemCount">{arrInTheWeek.length}</div>
                    </div>
                  </div>
                )}
                {arrInTheWeek.length > 0 &&
                  this.state.showInTheWeek &&
                  this.groupMapper(newArrInTheWeek)}

                {arrLater.length > 0 && (
                  <div
                    class="centerElem-taskCard"
                    onClick={() =>
                      this.setState({ showLater: !this.state.showLater })
                    }
                  >
                    <div class="taskCard-Actions">
                      <button>{this.state.showLater ? "∨" : ">"}</button>
                    </div>
                    <div class="taskCard">
                      <div class="centerElemText">Позже : </div>
                      <div class="centerElemCount">{arrLater.length}</div>
                    </div>
                  </div>
                )}
                {arrLater.length > 0 &&
                  this.state.showLater &&
                  this.groupMapper(newArrLater)}
              </div>
            )}
          </div>

          {this.state.isRightColumnVisible && (
            <div className="rightColumn">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  flexGrow: 1,
                }}
              >
                <div
                  style={{
                    width: "80%",
                    height: 40,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {this.state.tasks[curTaskIdx].title}
                </div>
                <div
                  style={{
                    display: "flex",
                    width: "80%",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <div style={{ width: "80%", marginTop: 10 }}>
                      {" "}
                      Подзадачи:{" "}
                    </div>
                    {this.state.tasks[curTaskIdx].subtasks.map((el, idx) => (
                      <div
                        style={{
                          width: "80%",
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                          alignItems: "center",
                          height: 30,
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
                    alignItems: "center",
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
                    alignItems: "center",
                  }}
                >
                  <div style={{ width: "80%", marginTop: 10 }}>
                    Старт задачи:
                  </div>
                  <div style={{ width: "80%" }}>
                    <input
                      style={{ width: "100%" }}
                      type="datetime-local"
                      value={this.state.tasks[this.state.currentTaskIdx].start}
                      onChange={(e) => this.editStartDateHandler(e)}
                    />
                  </div>
                  <div style={{ width: "80%", marginTop: 10 }}>
                    Конец задачи:
                  </div>
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
                    alignItems: "center",
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
