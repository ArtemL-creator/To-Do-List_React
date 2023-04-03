import React from "react";
import "./styles.css";

import { LeftColumnElem } from "./LeftColumnElem";
const svgRollUp = (
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

const svgPlanned = (<svg width="29.999999999999996" height="20" xmlns="http://www.w3.org/2000/svg">
  <g id="Layer_1">
    <title>Layer 1</title>
    <path id="svg_2" d="m15.56286,4.83634c-0.34117,0 -0.61633,0.22488 
    -0.61633,0.50196l0,4.62859l-3.73006,1.32719c-0.31218,0.11144 -0.45407,0.40759 
    -0.31711,0.66159c0.10118,0.18824 0.32698,0.30068 0.56451,0.30068c0.08267,0 
    0.16719,-0.01355 0.2474,-0.04267l4.08789,-1.45469c0.00308,-0.001 0.00555,-0.00201 
    0.00802,-0.00301l0.00247,-0.001c0.00925,-0.00301 0.01419,-0.01004 0.02283,-0.01255c0.06416,
    -0.0261 0.12401,-0.05672 0.17213,-0.09788c0.02098,-0.01707 0.0327,-0.03915 0.04874,
    -0.05873c0.02961,-0.03213 0.06231,-0.06375 0.0802,-0.1024c0.01481,-0.03012 0.01604,
    -0.06275 0.02344,-0.09487c0.00802,-0.03213 0.02344,-0.06074 0.02344,-0.09336l0,-4.95738c0,
    -0.27658 -0.27639,-0.50146 -0.61756,-0.50146zm9.64042,0.85685c0,-1.92352 -1.91562,-3.48261 
    -4.28038,-3.48261c-1.19564,0 -2.27407,0.39956 -3.04772,1.04258c-0.73849,-0.16013 -1.5109,-0.25349 
    -2.3117,-0.25349c-0.82301,0 -1.6164,0.09788 -2.3734,0.26654c-0.77674,-0.65004 -1.86071,-1.05563 -3.06314,
    -1.05563c-2.36414,0 -4.28038,1.55909 -4.28038,3.48261c0,0.92612 0.4479,1.7654 1.17282,2.38934c-0.27331,0.69773 
    -0.42261,1.44063 -0.42261,2.21265c0,4.02925 4.01448,7.29552 8.96671,7.29552c4.95224,0 8.96671,-3.26627 8.96671,
    -7.29552c0,-0.79059 -0.15979,-1.54956 -0.44544,-2.26284c0.69345,-0.61792 1.11853,-1.43712 1.11853,-2.33914zm
    -9.6398,10.39112c-3.9244,0 -7.11587,-2.59715 -7.11587,-5.78913c0,-3.19248 3.19147,-5.78963 7.11587,-5.78963c3.9244,0 
    7.11525,2.59665 7.11525,5.78963c0,3.19298 -3.19209,5.78913 -7.11525,5.78913z" stroke="#000" fill="#000000" />
  </g>
</svg>);

const importantTaskSvg = (<svg width="29.999999999999996" height="20" xmlns="http://www.w3.org/2000/svg">
  <g id="Layer_1">
    <title>Layer 1</title>
    <path id="svg_1" d="m14.44643,2.9366l2.15347,3.9937l-0.88796,0.47132l2.71163,
    3.42172l-0.88757,0.57144l3.35215,5.72985l-5.68584,-4.39099l1.08449,-0.60979l-3.53276,
    -2.81247l1.26591,-0.86914l-3.73009,-2.9504l4.15657,-2.55524z" stroke="#000" fill="#000000" />
  </g>
</svg>);

const toDayTaskSvg = (<svg width="30" height="20" xmlns="http://www.w3.org/2000/svg">
  <g id="Layer_1">
    <title>Layer 1</title>
    <path id="svg_2" d="m24.42236,9.39357l-2.4026,-1.75162l0,-4.1834l-2.05971,0l0,2.68177l-4.80598,-3.5038l-9.26829,
    6.75705l2.20644,-0.03833l0,6.83141l14.02563,0l0,-6.79309l2.30452,0zm-9.26829,5.81603l-4.57687,0l0,-4.00435l4.57687,
    0l0,4.00435zm4.44661,-1.71615l-3.00757,0l0,-2.31222l3.00757,0l0,2.31222z" stroke="#000" fill="#000000" />
    <path id="svg_3" d="m39.11664,14.39829l-0.01531,-0.01531l0,-0.03657l-0.01313,0l0,0.02344l-0.03063,-0.03063l-0.05906,
    0.05906l0.01406,-0.00034l0,0.05971l0.08938,0l0,-0.05938l0.01469,0zm-0.05906,0.05084l-0.02917,0l0,-0.035l0.02917,0l0,
    0.035zm0.02834,-0.015l-0.01917,0l0,-0.02021l0.01917,0l0,0.02021z" stroke="#000" fill="#000000" />
  </g>
</svg>);

const allTasksSvg = (<svg width="30" height="20" xmlns="http://www.w3.org/2000/svg">
  <g id="Layer_1">
    <title>Layer 1</title>
    <path id="svg_1" d="m9.03921,13.40213l13.15319,0.0045l-0.42682,0.56532l-12.29451,-0.0135l-0.43186,-0.55632l0,0zm0.09039,
    -7.52007l12.97743,-0.0135l0.37662,0.57993l-13.7357,0.0045l0.38165,-0.57093zm-1.28071,3.76821l15.52881,-0.0135l-0.02007,
    0.57994l-15.4987,-0.009l-0.01004,-0.55743zm15.54167,0.05379c0,3.83931 -3.48587,6.96262 -7.77129,6.96262c-4.28357,0 -7.76879,
    -3.12388 -7.76879,-6.96262c0,-3.83876 3.48585,-6.96207 7.76879,-6.96207c4.28542,-0.00056 7.77129,3.12331 7.77129,6.96207zm-7.77068,
    -7.52007c-4.62551,0 -8.38955,3.37319 -8.38955,7.51951c0,4.14688 3.76405,7.52007 8.38955,7.52007c4.62802,0 8.39144,-3.37319 8.39144,
    -7.52007c0,-4.14632 -3.76342,-7.51951 -8.39144,-7.51951zm2.35434,7.52007c0,4.10262 -1.24031,6.96262 -2.35434,6.96262c-1.11277,0 -2.35306,
    -2.86 -2.35306,-6.96262c0,-4.10375 1.23968,-6.96207 2.35306,-6.96207c1.1134,-0.00056 2.35434,2.85833 2.35434,6.96207zm-2.35434,
    -7.52007c-1.93233,0 -2.97509,3.8746 -2.97509,7.51951c0,3.64602 1.04276,7.52007 2.97509,7.52007c1.93235,0 2.977,-3.87461 2.977,
    -7.52007c-0.00063,-3.64491 -1.04465,-7.51951 -2.977,-7.51951zm5.51386,7.52007c0,3.83931 -2.47436,6.96262 -5.51386,6.96262c-3.03887,
    0 -5.51197,-3.12388 -5.51197,-6.96262c0,-3.83876 2.47311,-6.96207 5.51197,-6.96207c3.0395,-0.00056 5.51386,3.12331 5.51386,6.96207zm-5.51386,
    -7.52007c-3.38146,0 -6.134,3.37319 -6.134,7.51951c0,4.14688 2.75254,7.52007 6.134,7.52007c3.38272,0 6.13465,-3.37319 6.13465,-7.52007c0,-4.14632 
    -2.75193,-7.51951 -6.13465,-7.51951z" stroke="#000" fill="#000000" />
  </g>
</svg>);

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
              {svgRollUp}
            </button>
          </div>
        </div>
        <div className="leftColumnCenter">
          <div onClick={handleTodayTask}>
            <LeftColumnElem
              svg={toDayTaskSvg}
              name={"Сегодняшние задачи"}
              count={todayTaskCount}
            />
          </div>

          <div onClick={handleImportantTask}>
            <LeftColumnElem svg={importantTaskSvg} name={"Важные задачи"} count={importantTaskCount} />
          </div>

          <div onClick={handlePlanedTask}>
            <LeftColumnElem svg={svgPlanned}
              name={"Запланированные задачи"}
              count={planedTaskCount}
            />
          </div>

          <div onClick={handleAllTask}>
            <LeftColumnElem svg={allTasksSvg} name={"Все задачи"} count={allTaskCount} />
          </div>
        </div>
      </div>
    );
  }
}
