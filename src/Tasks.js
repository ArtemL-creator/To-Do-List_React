import React, { useState } from "react";
import "./styles.css";

export class Tasks extends React.Component {

    state = {
        tasks: [
            {
                title: "Один",
                description: "фыва",
                start: "2023-02-11",
                finish: "2023-02-11",
                category: "Orange",
                isImportant: false,
                isComplete: false,
                subTasks: [
                    { description: "", isComplete: false }
                ]
            },
            {
                title: "Два",
                description: "итым",
                start: "2023-02-17",
                finish: "2023-02-18",
                category: "Yellow",
                isImportant: false,
                isComplete: false,
                subTasks: [
                    { description: "", isComplete: false }
                ]
            },
            {
                title: "Три",
                description: "йарш",
                start: "2023-03-31",
                finish: "2023-03-31",
                category: "Blue",
                isImportant: false,
                isComplete: false,
                subTasks: [
                    { description: "", isComplete: false }
                ]
            },
            {
                title: "Четыре",
                description: "хлыб",
                start: "2023-03-31",
                finish: "2023-03-31",
                category: "Purple",
                isImportant: false,
                isComplete: false,
                subTasks: [
                    { description: "", isComplete: false }
                ]
            },
            {
                title: "Пять",
                description: "рэнад",
                start: "2023-04-01",
                finish: "2023-04-01",
                category: "Red",
                isImportant: false,
                isComplete: false,
                subTasks: [
                    { description: "", isComplete: false }
                ]
            },
            {
                title: "Шесть",
                description: "цзуй",
                start: "2023-04-04",
                finish: "2023-04-04",
                category: "Green",
                isImportant: false,
                isComplete: false,
                subTasks: [
                    { description: "", isComplete: false }
                ]
            },
            {
                title: "Семь",
                description: "абик",
                start: "2023-04-03",
                finish: "2023-04-03",
                category: "Orange",
                isImportant: false,
                isComplete: false,
                subTasks: [
                    { description: "", isComplete: false }
                ]
            },
            {
                title: "Восемь",
                description: "жня",
                start: "2023-04-02",
                finish: "2023-04-02",
                category: "Yellow",
                isImportant: false,
                isComplete: false,
                subTasks: [
                    { description: "", isComplete: false }
                ]
            },
            {
                title: "Девять",
                description: "хщет",
                start: "2023-04-08",
                finish: "2023-04-20",
                category: "Blue",
                isImportant: false,
                isComplete: false,
                subTasks: [
                    { description: "", isComplete: false }
                ]
            },
            {
                title: "Десять",
                description: "пнуш",
                start: "2023-04-09",
                finish: "2023-04-20",
                category: "Purple",
                isImportant: false,
                isComplete: false,
                subTasks: [
                    { description: "", isComplete: false }
                ]
            }
        ],
        showEarlier: false,
        showToday: true,
        showTomorrow: false,
        showAfterTomorrow: false,
        showInTheWeek: false,
        showLater: false,

        sortCode: 1 - 3,
        groupCode: 1 - 4,
        poUbyvanyu: true
    };

    /* isShowEarlier = (e) => {
        this.setState({ showEarlier: !e.target.value });
    }; */

    render() {

        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(today.getDate() + 1);
        const afterTomorrow = new Date(tomorrow);
        afterTomorrow.setDate(tomorrow.getDate() + 1);
        const inTheWeek = new Date(afterTomorrow);
        inTheWeek.setDate(afterTomorrow.getDate() + 6);

        console.log(today);
        console.log(tomorrow);
        console.log(afterTomorrow);
        console.log(inTheWeek);

        let arrEarlier = this.state.tasks.filter(
            (el) => (el.start.slice(0, 10) < today.toISOString().split("T")[0])
        );

        console.log("Раньше:" + arrEarlier.length);

        let arrToday = this.state.tasks.filter(
            (el) => (el.start.slice(0, 10) === today.toISOString().split("T")[0])
        );

        console.log("Сегодня:" + arrToday.length);

        let arrTomorrow = this.state.tasks.filter(
            (el) => (el.start.slice(0, 10) === tomorrow.toISOString().split("T")[0])
        );

        console.log("Завтра:" + arrTomorrow.length);

        let arrAfterTomorrow = this.state.tasks.filter(
            (el) => (el.start.slice(0, 10) === afterTomorrow.toISOString().split("T")[0])
        );

        console.log("Послезавтра:" + arrAfterTomorrow.length);

        let arrInTheWeek = this.state.tasks.filter(
            (el) => (el.start.slice(0, 10) > afterTomorrow.toISOString().split("T")[0] && el.start <= inTheWeek.toISOString().split("T"[0]))
        );

        console.log("На следующие 7 дней:" + arrInTheWeek.length);

        let arrLater = this.state.tasks.filter(
            (el) => (el.start.slice(0, 10) > inTheWeek.toISOString().split("T"[0]))
        );

        console.log("Позже:" + arrLater.length);


        function mounth(value) {
            switch (value + 1) {
                case 1: return 'января';
                    break;
                case 2: return 'февраля';
                    break;
                case 3: return 'марта';
                    break;
                case 4: return 'апреля';
                    break;
                case 5: return 'мая';
                    break;
                case 6: return 'июня';
                    break;
                case 7: return 'июля';
                    break;
                case 8: return 'августа';
                    break;
                case 9: return 'сентября';
                    break;
                case 10: return 'октября';
                    break;
                case 11: return 'ноября';
                    break;
                case 12: return 'декабря';
                    break;
                default:
                    console.log("чё-то не то");
            }
        };

        function wrapper(arr) {
            let arrDiv = []
            arr.forEach((el, i) => {
                let DateObjStart = new Date(el.start);
                let DateObjFinish = new Date(el.finish);
                arrDiv[i] = <div><p>{el.title} <br />Начало: {DateObjStart.getUTCDate()} {mounth(DateObjStart.getUTCMonth())} в {DateObjStart.toLocaleTimeString().slice(0, 5)} / Конец: {DateObjFinish.getUTCDate()} {mounth(DateObjFinish.getUTCMonth())} в {DateObjStart.toLocaleTimeString().slice(0, 5)}</p></div>;
            })
            console.log(arrDiv);
            return arrDiv;
        };

        return (

            <div class="centerElem">
                <div class="centerElem-taskCard" onClick={() => this.setState({ showEarlier: !this.state.showEarlier })}>
                    <div class="taskCard-Actions">
                        <button>{this.state.showEarlier ? '∨' : '>'}</button>
                    </div>
                    <div class="taskCard">
                        <div class="centerElemText">Раньше : </div>
                        <div class="centerElemCount">{arrEarlier.length}</div>
                    </div>
                </div>
                {this.state.showEarlier ? wrapper(arrEarlier) : null}

                <div class="centerElem-taskCard" onClick={() => this.setState({ showToday: !this.state.showToday })}>
                    <div class="taskCard-Actions">
                        <button>{this.state.showToday ? '∨' : '>'}</button>
                    </div>
                    <div class="taskCard">
                        <div class="centerElemText">Сегодня : </div>
                        <div class="centerElemCount">{arrToday.length}</div>
                    </div>
                </div>
                {this.state.showToday ? wrapper(arrToday) : null}

                <div class="centerElem-taskCard" onClick={() => this.setState({ showTomorrow: !this.state.showTomorrow })}>
                    <div class="taskCard-Actions">
                        <button>{this.state.showTomorrow ? '∨' : '>'}</button>
                    </div>
                    <div class="taskCard">
                        <div class="centerElemText">Завтра : </div>
                        <div class="centerElemCount">{arrTomorrow.length}</div>
                    </div>
                </div>
                {this.state.showTomorrow ? wrapper(arrTomorrow) : null}

                <div class="centerElem-taskCard" onClick={() => this.setState({ showAfterTomorrow: !this.state.showAfterTomorrow })}>
                    <div class="taskCard-Actions">
                        <button>{this.state.showAfterTomorrow ? '∨' : '>'}</button>
                    </div>
                    <div class="taskCard">
                        <div class="centerElemText">Послезавтра : </div>
                        <div class="centerElemCount">{arrAfterTomorrow.length}</div>
                    </div>
                </div>
                {this.state.showAfterTomorrow ? wrapper(arrAfterTomorrow) : null}

                <div class="centerElem-taskCard" onClick={() => this.setState({ showInTheWeek: !this.state.showInTheWeek })}>
                    <div class="taskCard-Actions">
                        <button>{this.state.showInTheWeek ? '∨' : '>'}</button>
                    </div>
                    <div class="taskCard">
                        <div class="centerElemText">На следующие 7 дней : </div>
                        <div class="centerElemCount">{arrInTheWeek.length}</div>
                    </div>
                </div>
                {this.state.showInTheWeek ? wrapper(arrInTheWeek) : null}

                <div class="centerElem-taskCard" onClick={() => this.setState({ showLater: !this.state.showLater })}>
                    <div class="taskCard-Actions">
                        <button>{this.state.showLater ? '∨' : '>'}</button>
                    </div>
                    <div class="taskCard">
                        <div class="centerElemText">Позже : </div>
                        <div class="centerElemCount">{arrLater.length}</div>
                    </div>
                </div>
                {this.state.showLater ? wrapper(arrLater) : null}
            </div >
        );
    }
}