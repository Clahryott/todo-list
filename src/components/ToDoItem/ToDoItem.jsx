import React from "react";

// CSS
import "./ToDoItem.css";

function ToDoItem(props) {
  const { todo, completeToDo, index } = props;

  return (
  <div className={`todo ${toDO.isComplete ? "complete" : ""}`}>
    {todo.text}
    <button onClick={() => completeToDo(index)}>Complete</button>
    <button onClick={() => removeToDo(index)}>Complete</button>
  </div>
  );
}

export default ToDoItem;
