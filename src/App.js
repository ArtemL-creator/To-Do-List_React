import React from "react";
import "./styles.css";

export class App extends React.Component {
  state = {
    day: "",
    dateStart: "",
    dateEnd: "",
    title: "",
    description: "",
    arr: [],
    flag: false,
    descValue: ""
  };

  handleDateStart = (e) => {
    this.setState({ dateStart: e.target.value });
  };

  handleDateEnd = (e) => {
    this.setState({ dateEnd: e.target.value });
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

    const dateDayStart = this.state.dateStart.split("T")[0];
    const dateTimeStart = this.state.dateStart.split("T")[1];
    const dateDayEnd = this.state.dateEnd.split("T")[0];
    const dateTimeEnd = this.state.dateEnd.split("T")[1];
    const title = this.state.title;
    const description = this.state.description;

    array.push({
      dateDayStart: dateDayStart,
      dateTimeStart: dateTimeStart,
      dateDayEnd: dateDayEnd,
      dateTimeEnd: dateTimeEnd,
      title: title,
      description: description,
      flag: false
    });

    this.setState({ dateStart: "", dateEnd: "", title: "", description: "", arr: array });
  };

  handleChange = (idx) => {
    const arr = [...this.state.arr];
    arr[idx].flag = true;
    const val = this.state.arr[idx].description;
    this.setState({ arr: arr, descValue: val });
  };

  handleAcceptChanges = (e, idx) => {
    if (e.keyCode === 13) {
      const arr = [...this.state.arr];
      arr[idx].flag = false;
      arr[idx].description = e.target.value;
      this.setState({ arr: arr, descValue: "" });
    } else {
      this.setState({ descValue: e.target.value });
    }
  };

  handleAcceptChanges2 = (e, idx) => {
    const arr = [...this.state.arr];
    arr[idx].flag = false;
    arr[idx].description = e.target.value;
    this.setState({ arr: arr, descValue: "" });
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
        Начало :
        <input
          type="datetime-local"
          onChange={this.handleDateStart}
          value={this.state.dateStart}
        />{" "}
        <br />
        Конец :
        <input
          type="datetime-local"
          onChange={this.handleDateEnd}
          value={this.state.dateEnd}
        />{" "}
        <br />
        <button onClick={this.handleAdd}> Добавить задачу </button> <br />
        Выберите по дню : <input type="date" onChange={this.handleDay} /> <br />
        Списочек задач: <br />
        {this.state.arr.map((el, idx) => (
          <div>
            {(String(el.dateDayStart) === String(this.state.day) ||
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
                    onKeyDown={(e) => this.handleAcceptChanges(e, idx)}
                    onChange={(e) => this.handleAcceptChanges(e, idx)}
                    onBlur={(e) => this.handleAcceptChanges2(e, idx)}
                    value={this.state.descValue}
                    autoFocus
                  />
                )}
                Начало : {el.dateDayStart} {el.dateTimeStart} Конец : {el.dateDayEnd} {el.dateTimeEnd}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  }
}
