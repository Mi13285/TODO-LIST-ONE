import React from "react";
import { useState } from "react";
import Todo from "./Todo.js";
import TodoForm from "./TodoForm.js";
function App() {
  const [todos, setTodos] = useState([]);
  console.log(todos);

  const addTask = (userInput) => {
    console.log(userInput);
    if (userInput) {
      const newItem = {
        id: Math.random().toString(36).substring(2, 9),
        task: userInput,
        complete: false,
      };
      setTodos([...todos, newItem]);
      console.log(setTodos);
    }
  };
  const removeTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  };
  const handleToggle = (id) => {
    setTodos([
      ...todos.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : { ...todo }
      ),
    ]);
  };
  return (
    <div className="App">
      <heder>
        <h1>Список задач :{todos.length}</h1>
      </heder>
      <TodoForm addTask={addTask} />
      {todos.map((todo) => {
        return (
          <Todo
            todo={todo}
            key={todo.id}
            toggleTask={handleToggle}
            removeTask={removeTask}
          />
        );
      })}
    </div>
  );
}

export default App;
