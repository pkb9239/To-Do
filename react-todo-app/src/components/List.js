import React from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
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
  const handleEnd = (result) => {
    // result 매개변수에는 source 항목 및 대상 위치와 같은 드래그 이벤트에 대한 정보가 포함된다.
    if (!result.destination) return;

    // 리액트 불변성을 지켜주기 위해 새로운 todoData 생성
    const newToDoData = todoData;

    // 1. 변경시키는 아이템을 배열에서 지워줍니다.
    // 2. return 값으로 지워진 아이템을 잡아줍니다.
    const [reorderedItem] = newToDoData.splice(result.source.index, 1);
    
    // 원하는 자리에 reorderItem을 insert 해줍니다.
    newToDoData.splice(result.destination.index, 0, reorderedItem);
    setToData(newToDoData);
  };
  return (
    <div>
      <DragDropContext onDragEnd={handleEnd}>
        <Droppable droppableId='todo'>
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {todoData.map((data, index) =>
                <Draggable
                  key={data.id}
                  draggableId={data.id.toString()}
                  index={index}
                >
                  {(provided, snapshot) => (
                    <div
                      key={data.id} {...provided.draggableProps}
                      ref={provided.innerRef} {...provided.dragHandleProps}
                      className={`${snapshot.isDragging ? "bg-gray-400" : "bg-gray-100"} flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 bg-gray-100 border rounded`}
                    >
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
                  )}
                </Draggable>
              )}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
}
