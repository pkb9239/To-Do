import React from 'react'

export default function List({ todoData, setToData }) {
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
    <div>
      {todoData.map((data) =>
        <div key={data.id}>
          <div className='flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 bg-gray-100 border rounded'>
            <div className='items-center'>
              <input
                type="checkbox"
                defaultChecked={false}
                onChange={() => hadleCheckBox(data.id)}
              />{" "}
              <span className={data.completed ? 'line-through' : undefined}>{data.title}</span>
            </div>
            <div className='items-center'>
              <button className="px-4 py-2 float-right" onClick={() => handleClick(data.id)}>x</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
