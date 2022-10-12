import React, { useCallback, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";

const initialTodoData = localStorage.getItem("tododata") ? JSON.parse(localStorage.getItem("tododata")) : [];

export default function App() {
  const [todoData, setToData] = useState(initialTodoData);
  const [value, setValue] = useState("");

  const handleClick = useCallback((id) => {
    let newToDoData = todoData.filter((data) => data.id !== id);
    setToData(newToDoData);
    localStorage.setItem("tododata", JSON.stringify(newToDoData));
  }, [todoData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let newToDo = {
      id: Date.now(),
      title: value,
      completed: false
    };
    // 원래 있던 할 일에 새로운 할 일 더해주기
    setToData(prev => [...prev, newToDo]);
    localStorage.setItem("tododata", JSON.stringify([...todoData, newToDo]));
    setValue("");
  };

  const handleRemoveClick = () => {
    setToData([]);
    localStorage.setItem("tododata", JSON.stringify([]));
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-blue-100">
      <div className="w-full p-6 m-4 bg-white rounded shadow lg:w-3/4 lg:max-w-lg">
        <div className="flex justify-between mb-3">
          <h1>할 일 목록</h1>
          <button onClick={handleRemoveClick}>Delete All</button>
        </div>
        
        <List todoData={todoData} setToData={setToData} handleClick={handleClick}/>
        
        <Form value={value} setValue={setValue} handleSubmit={handleSubmit} />
      </div>
    </div>
  )
}