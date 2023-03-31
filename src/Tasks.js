import React from "react";
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
                start: "2023-04-01",
                finish: "2023-04-02",
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
                start: "2023-04-01",
                finish: "2023-04-01",
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
                start: "2023-04-06",
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
        sortCode: 1 - 3,
        groupCode: 1 - 4,
        poUbyvanyu: true
    }

    render() {

        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(today.getDate() + 1);
        const afterTomorrow = new Date(tomorrow);
        afterTomorrow.setDate(tomorrow.getDate() + 1);
        const inTheWeek = new Date(afterTomorrow);
        inTheWeek.setDate(afterTomorrow.getDate() + 6);
        //const arr = [...this.state.tasks];
        //console.log(arr.length);
        console.log(today);
        console.log(tomorrow);
        console.log(afterTomorrow);
        console.log(inTheWeek);

        let arrEarlier = this.state.tasks.filter(
            (el) => el.start < today.toISOString().split("T")[0]
        );

        console.log("Раньше:" + arrEarlier.length);

        let arrToday = this.state.tasks.filter(
            (el) => el.start === today.toISOString().split("T")[0]
        );

        console.log("Сегодня:" + arrToday.length);

        let arrTomorrow = this.state.tasks.filter(
            (el) => el.start === tomorrow.toISOString().split("T")[0]
        );

        console.log("Завтра:" + arrTomorrow.length);

        let arrAfterTomorrow = this.state.tasks.filter(
            (el) => el.start === afterTomorrow.toISOString().split("T")[0]
        );

        console.log("Послезавтра:" + arrAfterTomorrow.length);

        let arrInTheWeek = this.state.tasks.filter(
            (el) => (el.start > afterTomorrow.toISOString().split("T")[0] && el.start < inTheWeek.toISOString().split("T"[0]))
        );

        console.log("На следующие 7 дней:" + arrInTheWeek.length);

        let arrLater = this.state.tasks.filter(
            (el) => (el.start > inTheWeek.toISOString().split("T"[0]))
        );

        console.log("Позже:" + arrLater.length);


        return (
            <div>
                {today.toISOString().split("T")[0]}
            </div>
        );
    }
}