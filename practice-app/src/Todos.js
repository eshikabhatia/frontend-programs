
import React, { useState } from 'react';

function Todos(props) {
  const [inputValue, setInputValue] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editValue, setEditValue] = useState("");
  const [searchResult, setSearchResults] = useState([]);
  const [searchclicked, setSearchClicked] = useState(false);

  function handleSearch(e) {
    const searchResults = props.todos.filter((todo) =>
      todo.title.toLowerCase().includes(e.toLowerCase())
    );

    setSearchResults(searchResults);
  }

  return (
    // CHANGE 1: Main container ko Bootstrap card styling di
    <div className="card shadow p-4 mb-4 bg-light rounded-4">

      {/* CHANGE 2: Input field ko Bootstrap styling di */}
      <div className="mb-3">
        <label htmlFor="todos" className="form-label">
          Add Todos
        </label>

        <input
          type="text"
          id="todos"
          name="todos"
          className="form-control mb-3"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              props.onAdd(inputValue);
              setInputValue("");
            }
          }}
        />

        {/* CHANGE 3: Add, Search aur Clear buttons styled */}
        <button
          className="btn btn-primary me-2 mb-2"
          onClick={() => {
            props.onAdd(inputValue);
            setInputValue("");
          }}
        >
          Add
        </button>

        <button
          className="btn btn-success me-2 mb-2"
          onClick={() => {
            handleSearch(inputValue);
            setSearchClicked(true);
          }}
        >
          Search
        </button>

        <button
          className="btn btn-secondary mb-2"
          onClick={() => {
            setInputValue("");
            setSearchClicked(false);
            setSearchResults([]);
          }}
        >
          Clear
        </button>
      </div>

      {/* CHANGE 4: Heading mein spacing add ki */}
      <h2 className="mt-3 mb-3">Todo List</h2>

      {
        searchclicked
          ? searchResult.length > 0
            ? searchResult.map((todo, index) => (
                // CHANGE 5: Search results ko styled list items banaya
                <li
                  className="list-group-item d-flex align-items-center flex-wrap gap-2 mb-3 p-3 border rounded shadow-sm"
                  key={todo.id}
                >
                  <span>
                    {index + 1} - {todo.title} -
                    {todo.completed ? " Completed" : " Pending"}
                  </span>

                  {/* CHANGE 6: Search result buttons styled */}
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => props.onDelete(todo.id)}
                  >
                    Delete
                  </button>

                  <button
                    className="btn btn-success btn-sm"
                    onClick={() => props.onComplete(todo.id)}
                  >
                    {todo.completed
                      ? "Mark as Pending"
                      : "Mark as Completed"}
                  </button>

                  {editingId !== todo.id ? (
                    <button
                      className="btn btn-warning btn-sm"
                      onClick={() => {
                        setEditingId(todo.id);
                        setEditValue(todo.title);
                      }}
                    >
                      Edit
                    </button>
                  ) : (
                    <>
                      <input
                        type="text"
                        className="form-control"
                        style={{ maxWidth: "250px" }}
                        value={editValue}
                        onChange={(e) => setEditValue(e.target.value)}
                      />

                      <button
                        className="btn btn-primary btn-sm"
                        onClick={() => {
                          props.onEdit(todo.id, editValue);
                          setEditingId(null);
                        }}
                      >
                        Save
                      </button>
                    </>
                  )}
                </li>
              ))
            : <p className="text-muted">No todo found</p>
          : props.todos.length === 0
            ? <p className="text-muted">No more todos</p>
            : props.todos.map((todo, index) => (
                // CHANGE 7: Normal todos ko bhi same styling di
                <li
                  className="list-group-item d-flex align-items-center flex-wrap gap-2 mb-3 p-3 border rounded shadow-sm"
                  key={todo.id}
                >
                  <span>
                    {index + 1} - {todo.title} -
                    {todo.completed ? " Completed" : " Pending"}
                  </span>

                  {/* CHANGE 8: Normal list buttons styled */}
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => props.onDelete(todo.id)}
                  >
                    Delete
                  </button>

                  <button
                    className="btn btn-success btn-sm"
                    onClick={() => props.onComplete(todo.id)}
                  >
                    {todo.completed
                      ? "Mark as Pending"
                      : "Mark as Completed"}
                  </button>

                  {editingId !== todo.id ? (
                    <button
                      className="btn btn-warning btn-sm"
                      onClick={() => {
                        setEditingId(todo.id);
                        setEditValue(todo.title);
                      }}
                    >
                      Edit
                    </button>
                  ) : (
                    <>
                      <input
                        type="text"
                        className="form-control"
                        style={{ maxWidth: "250px" }}
                        value={editValue}
                        onChange={(e) => setEditValue(e.target.value)}
                      />

                      <button
                        className="btn btn-primary btn-sm"
                        onClick={() => {
                          props.onEdit(todo.id, editValue);
                          setEditingId(null);
                        }}
                      >
                        Save
                      </button>
                    </>
                  )}
                </li>
              ))
      }

      <p className="mt-3 text-muted">{props.message}</p>
    </div>
  );
}

export default Todos;
