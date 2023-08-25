import React, { useState } from "react";

const TodoForm = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleDelete = (id) => {
    const delTodo = todos.filter((to) => to.id !== id);
    setTodos([...delTodo]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo !== "") {
      setTodos([{ id: `${todo}-${Date.now()}`, todo }, ...todos]);
      setTodo("");
    }
  };

  return (
    <>
    {/* Form */}
      <form className="todoForm" onSubmit={handleSubmit}>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit">{"Submit"}</button>
      </form>

    {/* List */}
      <ul className="allTodos">
        {todos.map((t) => (
          <li className="singleTodo">
            <span className="todoText" key={t.id}>
              {t.todo}
            </span>
            <button onClick={() => handleDelete(t.id)}>Delete</button>
          </li>
        ))}
      </ul>
      
    </>
  );
};

export default TodoForm;
