import React from "react";
import "./styles.css";

let finished;

export class App extends React.Component {
  state = {
    day: "",
    dateStart: "",
    dateEnd: "",
    title: "",
    description: "",
    arr: [],
    flag: false,
    descValue: "",
    finishedCount: 0, // мой день, важно, неважно
    flagShit: false // сюда флаги позже раньше, для завершенных два вида
  };

  // state.day.huinya; // забрать хуйню из вложенного объекта
  // state.arr; // забираешь массив из state
  // state.arr[1]; // забираешь объект из массива
  // state.arr[1].huinya // забираешь значение поля из объекта массива;

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

  handleFilter = () => {
    const arr = [...this.state.arr];
    const today = new Date().toISOString().split("T")[0];
    console.log(today);

    console.log(arr[0].dateDayStart);
    if (today === arr[0].dateDayStart) {
      console.log("ЧВК")
    }

    finished = this.state.arr.filter(
      (el) => el.dateDay === today
    );

    console.log(finished);
  };

  render() {
    return (
      <div>
        <button onClick={this.handleFilter} /> <br />
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
                  {String(new Date(el.dateDayStart).getDay())}
                </div>
              )}
          </div>
        )).length
        }
        <br />
        {finished = this.state.arr.filter(
          (el) => String(el.dateDay) === String(new Date().getDay())
        ).length}
        /// ленгс всегда ебашить, а тоже самое без ленгс если кнопка нажата ////
        filter сюда ебашшш // задачу надо в отдельный класс с пропсами
      </div>
    );
  }
}
