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
    width="25px" viewBox="0 0 1279.000000 1280.000000"
    preserveAspectRatio="xMidYMid meet">
    <metadata>
      Created by potrace 1.15, written by Peter Selinger 2001-2017
    </metadata>
    <g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
      fill="#000000" stroke="none">
      <path d="M8860 12794 c-14 -2 -59 -9 -100 -15 -239 -33 -517 -147 -776 -317
-253 -167 -443 -325 -819 -682 -289 -274 -407 -378 -542 -479 -519 -386 -1257
-658 -2443 -901 l-156 -32 -89 58 c-553 357 -1131 620 -1767 804 -195 57 -477
122 -628 146 -125 19 -378 22 -470 5 -396 -73 -610 -344 -660 -836 -17 -158
-8 -489 20 -755 94 -917 291 -1732 625 -2595 130 -336 155 -428 155 -568 -1
-133 -47 -238 -167 -378 -26 -31 -117 -129 -200 -218 -84 -89 -193 -216 -242
-281 -327 -434 -515 -957 -583 -1620 -17 -164 -17 -713 0 -895 41 -446 102
-807 228 -1360 75 -325 82 -363 100 -490 18 -130 46 -197 103 -251 33 -32 139
-89 148 -80 2 1 -15 56 -37 122 -331 981 -467 2193 -345 3069 63 449 180 794
364 1066 84 125 155 206 249 283 417 340 958 352 1592 35 731 -366 1229 -927
1365 -1539 26 -118 31 -375 10 -501 -81 -484 -404 -847 -863 -971 -121 -33
-373 -37 -520 -9 -458 88 -858 409 -1068 857 -25 55 -62 131 -80 171 -64 135
-170 194 -224 125 -50 -62 -4 -272 106 -482 83 -160 174 -280 324 -431 228
-229 457 -359 755 -427 138 -32 259 -42 645 -52 374 -10 459 -19 603 -65 115
-37 218 -87 326 -159 133 -89 222 -165 476 -406 251 -238 343 -317 469 -402
118 -79 219 -129 347 -171 94 -32 188 -52 609 -132 404 -78 626 -196 775 -414
l46 -68 -25 -89 c-67 -241 -97 -383 -87 -403 12 -22 107 -61 151 -61 58 0 66
17 130 273 86 350 118 437 206 568 110 164 210 287 348 425 394 392 882 646
1363 709 611 80 1175 -201 1482 -740 132 -232 196 -482 189 -743 l-3 -132 30
-12 c96 -40 221 27 261 139 18 52 17 209 -2 318 -47 272 -223 638 -431 895
-61 75 -221 235 -320 320 l-53 45 236 415 c707 1245 769 1347 864 1433 94 85
219 109 337 65 78 -28 185 -136 231 -229 96 -197 82 -365 -63 -767 -116 -325
-141 -460 -132 -720 8 -257 61 -471 177 -711 149 -307 359 -552 628 -732 123
-83 235 -137 379 -185 180 -61 272 -48 338 45 l30 43 -2 236 c-4 659 -168
1348 -472 1977 -103 213 -190 365 -326 570 -138 207 -243 342 -456 585 -195
223 -275 333 -340 465 -66 136 -89 237 -89 395 0 160 16 253 94 563 104 407
141 633 155 939 22 501 -50 960 -239 1510 -33 97 -128 346 -211 555 -364 913
-411 1112 -454 1933 -24 472 -43 684 -76 880 -79 471 -251 842 -508 1101 -185
185 -377 292 -623 345 -70 15 -326 27 -378 18z m310 -389 c418 -154 764 -684
909 -1391 108 -528 85 -1038 -69 -1488 -33 -99 -38 -156 -15 -200 8 -15 57
-85 109 -155 564 -762 742 -1203 850 -2111 61 -511 54 -960 -25 -1530 -45
-325 -135 -704 -195 -821 -7 -15 -50 -134 -95 -265 -44 -131 -103 -288 -130
-349 -194 -433 -500 -797 -942 -1118 -234 -171 -447 -291 -883 -498 -1049
-498 -1480 -649 -1998 -700 -175 -17 -564 -6 -736 20 -370 58 -792 181 -1245
363 -458 184 -929 419 -971 483 -24 37 -11 67 55 124 33 29 83 84 112 124 29
40 73 99 97 132 54 72 105 178 127 260 23 84 30 291 16 411 -18 141 -54 305
-116 526 -122 439 -218 648 -386 848 -30 36 -77 94 -104 130 -28 36 -78 96
-112 133 -96 105 -96 126 1 238 35 41 100 116 145 168 219 254 389 514 675
1034 277 502 376 870 445 1652 40 444 37 631 -13 829 -44 172 -163 438 -242
542 -49 64 -64 98 -64 149 0 41 5 51 45 94 95 102 276 168 815 299 380 93 898
177 1175 191 102 5 150 12 177 25 68 33 188 172 323 374 71 106 165 237 209
290 104 125 381 407 508 520 360 316 881 621 1175 686 109 25 279 16 373 -19z
m-7618 -2080 c128 -22 260 -69 398 -142 439 -231 634 -454 690 -793 32 -188
-30 -385 -184 -590 -123 -164 -422 -426 -566 -497 -173 -85 -303 -10 -472 273
-146 245 -255 484 -322 707 -44 145 -122 492 -136 601 -29 233 80 406 280 445
72 14 220 12 312 -4z"/>
      <path d="M8851 11829 c-71 -12 -216 -61 -288 -98 -259 -131 -535 -391 -766
-724 -137 -196 -187 -308 -187 -419 0 -132 69 -206 275 -293 50 -21 252 -119
449 -218 198 -98 387 -190 420 -202 177 -66 342 -72 461 -17 221 104 336 414
322 872 -6 190 -21 294 -86 585 -44 196 -55 235 -96 314 -85 168 -265 239
-504 200z m64 -342 c64 -67 101 -182 179 -547 47 -223 67 -393 69 -586 2 -146
0 -164 -17 -183 -37 -41 -114 -24 -335 70 -210 90 -382 193 -576 344 -163 127
-194 188 -142 284 37 70 256 350 350 448 138 143 260 212 376 213 51 0 57 -3
96 -43z"/>
      <path d="M8896 7075 c-33 -13 -110 -58 -170 -98 -61 -41 -150 -100 -197 -131
-98 -63 -185 -152 -220 -223 -35 -72 -38 -174 -7 -232 36 -68 87 -103 153
-109 53 -4 57 -3 89 32 23 24 48 72 76 143 69 180 119 240 260 306 113 54 177
42 294 -55 32 -27 73 -56 90 -66 42 -22 141 -22 184 1 69 37 92 129 53 206
-30 58 -123 137 -215 181 -156 75 -282 90 -390 45z"/>
      <path d="M10005 6115 c-133 -23 -455 -129 -567 -186 -47 -24 -78 -64 -78 -101
0 -39 32 -100 70 -132 51 -42 99 -36 233 29 98 48 126 57 222 71 86 12 126 24
184 52 85 43 92 55 95 159 1 60 -2 75 -19 91 -28 28 -60 31 -140 17z"/>
      <path d="M4960 5864 c-14 -2 -52 -9 -85 -15 -143 -25 -289 -131 -389 -282
-146 -222 -157 -309 -46 -384 44 -31 106 -30 151 0 21 14 49 50 74 97 52 97
186 236 266 274 115 55 216 53 379 -9 109 -41 160 -44 221 -12 84 45 90 109
18 191 -61 70 -113 91 -289 120 -93 16 -261 27 -300 20z"/>
      <path d="M10045 5513 c-332 -90 -336 -92 -371 -128 -34 -37 -49 -87 -34 -115
5 -10 24 -23 41 -29 58 -20 114 -13 226 30 99 38 117 41 223 45 146 5 244 21
263 42 40 45 32 125 -18 177 -29 31 -38 35 -81 34 -27 -1 -139 -26 -249 -56z"/>
      <path d="M7263 5475 c-261 -47 -493 -195 -623 -396 -63 -98 -77 -186 -41 -264
42 -90 132 -142 318 -181 267 -56 316 -74 332 -117 19 -49 62 -389 62 -490 0
-96 -4 -117 -37 -217 -58 -176 -123 -258 -246 -315 -193 -88 -433 -28 -636
159 -51 46 -108 90 -127 96 -53 18 -98 -8 -131 -76 -23 -48 -26 -63 -22 -124
8 -113 72 -196 203 -262 158 -81 327 -113 544 -105 286 10 431 83 523 260 77
148 159 236 242 258 36 10 49 9 106 -12 59 -22 84 -24 260 -27 107 -2 253 1
324 7 156 13 204 32 295 117 35 32 107 95 159 139 127 106 138 128 164 331 12
92 17 175 13 201 -8 55 -51 106 -103 121 -53 16 -155 15 -195 -2 -62 -26 -70
-45 -78 -179 -9 -136 -37 -262 -70 -309 -30 -42 -101 -85 -184 -111 -89 -28
-266 -30 -365 -4 -151 40 -271 128 -304 222 -8 26 -20 93 -27 149 -21 189 10
317 129 534 116 209 135 255 140 341 3 71 2 79 -26 123 -58 90 -226 148 -422
147 -58 0 -137 -7 -177 -14z"/>
      <path d="M9828 4739 c-44 -13 -88 -60 -88 -95 0 -40 25 -88 61 -118 32 -27 36
-28 99 -20 142 18 180 12 282 -39 102 -51 140 -57 193 -31 43 20 135 117 135
142 0 56 -99 111 -257 143 -115 23 -369 34 -425 18z"/>
      <path d="M4855 4609 c-171 -59 -384 -188 -478 -289 -56 -60 -86 -123 -74 -154
11 -29 57 -39 114 -28 68 14 505 196 566 236 68 45 76 168 15 234 -27 28 -64
28 -143 1z"/>
      <path d="M4830 3973 c-14 -2 -60 -15 -102 -29 -195 -64 -340 -225 -308 -343
14 -52 62 -108 101 -116 43 -10 125 33 185 96 27 28 58 56 69 62 12 6 71 11
140 12 104 0 126 4 162 23 70 37 88 93 54 167 -46 102 -162 151 -301 128z"/>
      <path d="M4955 3331 c-46 -21 -106 -77 -227 -215 -117 -131 -132 -191 -66
-256 89 -89 261 -41 354 100 35 52 61 67 144 85 139 29 180 62 180 146 0 57
-18 80 -85 109 -47 20 -188 50 -234 50 -14 0 -44 -9 -66 -19z"/>
      <path d="M3003 4475 c-34 -15 -37 -23 -33 -95 5 -94 71 -212 180 -320 86 -87
153 -125 201 -115 42 9 95 59 109 100 15 46 3 83 -59 177 -95 145 -182 220
-290 252 -65 19 -67 19 -108 1z"/>
      <path d="M2341 4194 c-13 -9 -29 -32 -37 -50 -25 -60 -19 -78 47 -136 70 -60
99 -106 133 -205 45 -131 81 -159 188 -147 83 9 102 29 95 98 -10 94 -53 189
-118 260 -98 107 -222 196 -271 196 -8 0 -24 -7 -37 -16z"/>
      <path d="M1684 3875 c-26 -40 -14 -104 34 -177 56 -87 87 -157 116 -267 14
-52 33 -102 41 -110 10 -10 33 -16 61 -16 40 0 50 5 79 36 83 91 38 290 -100
438 -108 115 -195 151 -231 96z"/>
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
