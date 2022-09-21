import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  btnStyle = {
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right"
  }

  getStyle = () => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: "none"
    }
  }
  state = {
    todoData: [
      {
        id: "1",
        title: "공부하기",
        completed: true
      },
      {
        id: "2",
        title: "청소하기",
        completed: false
      }
    ],
    value: "",
  };

  handleClick = (id) => {
    let newToDoData = this.state.todoData.filter((data) => data.id !== id);
    this.setState({ todoData: newToDoData });
  };

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let newToDo = {
      id: Date.now(),
      title: this.state.value,
      completed: false
    };
    this.setState({ todoData: [...this.state.todoData, newToDo] });
  }

  render() {
    return (
      <div className="container">
        <div className="todoBlock">
          <div className="title">
            <h1>할 일 목록</h1>
          </div>
          {this.state.todoData.map((data) =>
            <div style={this.getStyle()} key={data.id}>
              <p>
                <input type="checkbox" defaultChecked={data.completed} />
                {" "}{data.title}
                <button style={this.btnStyle} onClick={() => this.handleClick(data.id)}>x</button>
              </p>
            </div>
          )}
          <form style={{ display: 'flex' }} onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="value"
              style={{ flex: '10', padding: '5px' }}
              placeholder="해야 할 일을 입력하세요."
              value={this.state.value}
              onChange={this.handleChange}
            />
            <input
              type="submit"
              value="입력"
              className="btn"
              style={{ flex: '1' }}
              onClick={this.onClick}
            />
          </form>
        </div>
      </div>
    )
  }
}