import React from 'react'

export default function List({todoData, setToData}) {
    const btnStyle = {
        color: "#fff",
        border: "none",
        padding: "5px 9px",
        borderRadius: "50%",
        cursor: "pointer",
        float: "right"
      }
      const hadleCheckBox = (id) => {
        let newToDoData = todoData.map((data) => {
          if (data.id === id) {
            data.completed = !data.completed;
          }
          return data;
        });
        setToData(newToDoData);    
      }
      const handleClick = (id) => {
        let newToDoData = todoData.filter((data) => data.id !== id);
        setToData(newToDoData);
      };
      const getStyle = (completed) => {
        return {
          padding: "10px",
          borderBottom: "1px #ccc dotted",
          textDecoration: completed ? "line-through" : "none"
        }
      }
    return (
        <div>
            {todoData.map((data) =>
                <div style={getStyle(data.completed)} key={data.id}>
                    <p>
                        <input type="checkbox" defaultChecked={false} onChange={() => hadleCheckBox(data.id)} />
                        {" "}{data.title}
                        <button style={btnStyle} onClick={() => handleClick(data.id)}>x</button>
                    </p>
                </div>
            )}
        </div>
    )
}
