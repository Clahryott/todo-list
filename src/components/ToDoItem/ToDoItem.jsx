import React from "react";

// CSS
import "./ToDoItem.css";
// props is an object like a dictionary & is the standard
// the below if deconstructing and we are are only grabbing what we need
function ToDoItem(props) {
  const { todo, completeToDo, index } = props;
//object destructuring by removing .todo
  const {text, isCompleted } = todo
  return (
  // if todo is complete, else empty string in ""
  <div className={`todo ${toDO.isComplete ? "complete" : ""}`}>
  {text}
  {/* todo is being passed */}
  <div>
  {/* adds button next to the todoItems */}
    <button onClick={() => completeToDo(index)}>{`complete${isCompleted ? "d" : ""}`}</button>
    {/* adds an "x" to remove item */}
    <button onClick={() => removeToDo(index)}>x</button>
  </div>
  </div>
  );
}

export default ToDoItem;
