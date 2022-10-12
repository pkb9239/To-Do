import React from 'react'

export default function Lists({id, title, completed, todoData, setToData, provided, snapshot}) {
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
    return (
        <div
            key={id} {...provided.draggableProps}
            ref={provided.innerRef} {...provided.dragHandleProps}
            className={`${snapshot.isDragging ? "bg-gray-400" : "bg-gray-100"} flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 bg-gray-100 border rounded`}
        >
            <div className='items-center'>
                <input
                    type="checkbox"
                    defaultChecked={false}
                    onChange={() => hadleCheckBox(id)}
                />{" "}
                <span className={completed ? 'line-through' : undefined}>{title}</span>
            </div>
            <div className='items-center'>
                <button className="px-4 py-2 float-right" onClick={() => handleClick(id)}>x</button>
            </div>
        </div>
    )
}
