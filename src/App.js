import React from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";

const App = () => {

  return (
    <div className="App">
      <div className="container">
        <h1>Todo List App</h1>
        <TodoForm/>
      </div>
    </div>
  );
};

export default App;
