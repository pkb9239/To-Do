import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [todoData, setToData] = useState([]);
  const [value, setValue] = useState("");

  const btnStyle = {
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right"
  }

  const getStyle = (completed) => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: completed ? "line-through" : "none"
    }
  }
  const handleClick = (id) => {
    let newToDoData = todoData.filter((data) => data.id !== id);
    setToData(newToDoData);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let newToDo = {
      id: Date.now(),
      title: value,
      completed: false
    };
    // 원래 있던 할 일에 새로운 할 일 더해주기
    setToData(prev => [...prev, newToDo]);
    setValue("");
  }; 

  const hadleCheckBox = (id) => {
    let newToDoData = todoData.map((data) => {
      if (data.id === id) {
        data.completed = !data.completed;
      }
      return data;
    });
    setToData(newToDoData);    
  }

    return (
      <div className="container">
        <div className="todoBlock">
          <div className="title">
            <h1>할 일 목록</h1>
          </div>
          {todoData.map((data) =>
            <div style={getStyle(data.completed)} key={data.id}>
              <p>
                <input type="checkbox" defaultChecked={false} onChange={() => hadleCheckBox(data.id)}  />
                {" "}{data.title}
                <button style={btnStyle} onClick={() => handleClick(data.id)}>x</button>
              </p>
            </div>
          )}
          <form style={{ display: 'flex' }} onSubmit={handleSubmit}>
            <input
              type="text"
              name="value"
              style={{ flex: '10', padding: '5px' }}
              placeholder="해야 할 일을 입력하세요."
              value={value}
              onChange={handleChange}
            />
            <input
              type="submit"
              value="입력"
              className="btn"
              style={{ flex: '1' }}
            />
          </form>
        </div>
      </div>
    )
  }