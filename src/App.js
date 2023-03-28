import React from "react";
import "./styles.css";

export class App extends React.Component {
  state = {
    day: "",
    date: "",
    title: "",
    description: "",
    arr: [],
    flag: false,
    kakayToShlypa: ""
  };

  handleDate = (e) => {
    this.setState({ date: e.target.value });
  };

  handleTitle = (e) => {
    this.setState({ title: e.target.value });
  };

  handleDescription = (e) => {
    this.setState({ description: e.target.value });
  };

  handleDay = (e) => {
    this.setState({ day: e.target.value });
  };

  handleAdd = () => {
    const array = [...this.state.arr];

    const dateDay = this.state.date.split("T")[0];
    const dateTime = this.state.date.split("T")[1];
    const title = this.state.title;
    const description = this.state.description;

    array.push({
      dateDay: dateDay,
      dateTime: dateTime,
      title: title,
      description: description,
      flag: false
    });

    this.setState({ date: "", title: "", description: "", arr: array });
  };

  handleChange = (idx) => {
    const arr = [...this.state.arr];
    arr[idx].flag = true;
    this.setState({ arr: arr });
  };

  handleShlyapa = (e, idx) => {
    if (e.keyCode === 13) {
      const arr = [...this.state.arr];
      arr[idx].flag = false;
      arr[idx].description = e.target.value;
      this.setState({ arr: arr, kakayToShlypa: "" });
    } else {
      this.setState({ kakayToShlypa: e.target.value });
    }
  };

  render() {
    return (
      <div>
        Название задачи :{" "}
        <input value={this.state.title} onChange={this.handleTitle} />
        <br />
        Описание задачи :{" "}
        <input
          value={this.state.description}
          onChange={this.handleDescription}
        />{" "}
        <br />
        Выбранная дата :
        <input
          type="datetime-local"
          onChange={this.handleDate}
          value={this.state.date}
        />{" "}
        <br />
        <button onClick={this.handleAdd}> Добавить задачу </button> <br />
        Выберите по дню : <input type="date" onChange={this.handleDay} /> <br />
        Списочек задач: <br />
        {this.state.arr.map((el, idx) => (
          <div>
            {(String(el.dateDay) === String(this.state.day) ||
              String(this.state.day) === "") && (
              <div>
                <h2>{el.title}</h2>
                {!el.flag && (
                  <span onClick={() => this.handleChange(idx)}>
                    {" "}
                    {el.description}{" "}
                  </span>
                )}
                {el.flag && (
                  <input
                    onKeyDown={(e) => this.handleShlyapa(e, idx)}
                    onChange={(e) => this.handleShlyapa(e, idx)}
                    value={this.state.kakayToShlypa}
                  />
                )}
                {el.dateDay} {el.dateTime}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  }
}
