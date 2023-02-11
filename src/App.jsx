import React, { useState } from "react";

// Components
import ToDoForm from "./components/ToDoForm/ToDoForm";
import ToDoItem from "./components/ToDoItem/ToDoItem";

// CSS
import "./App.css";

function App() {
  // State
  const [todos, setTodos] = useState([
    "Do this",
    "Do that",
    "Maybe something else",
  ]);

  // Actions
  const addTodo = (text) => {
    const newTodos = [...todos, {text, isComplete: false }]; // 3 dots expands it
    setTodos(newTodos);
  };

  const completeToDo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isComplete = true;
    setTodos(newTodos);
  };

  const removeToDo = (index) => {
    const newTodos = [...todos]; //the ...todos is referencing the array in state
    newTodos.splice(index, 1 );
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="todo-list">
        <h1>ToDo List</h1>
        {todos.map((todo, index) => (
          <ToDoItem 
          key={index} 
          todo={todo} 
          completeToDo={completeToDo}
          removeToDo={removeToDo}
          />
        ))}
        <ToDoForm 
        addTodo={addTodo} 
        />
      </div>
    </div>
  );
}

export default App;
