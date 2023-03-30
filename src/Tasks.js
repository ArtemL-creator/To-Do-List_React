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
                start: "2023-03-30",
                finish: "2023-03-30",
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
                start: "2023-03-30",
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
                start: "2023-03-31",
                finish: "2023-03-31",
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
                start: "2023-03-31",
                finish: "2023-04-01",
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
                start: "2023-04-03",
                finish: "2023-04-03",
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
                start: "2023-04-20",
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
                start: "2023-04-21",
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
        {
            const arr = [...this.state.tasks];
            console.log(arr.length);
            const today = new Date().toISOString().split("T")[0];
            console.log(today);

            console.log(arr[0].start);
            console.log(arr[1].start);
            console.log(arr[2].start);
            if (today === arr[2].start) {
                console.log("ЧВК")
            }

        }
        return (true)
    }
}