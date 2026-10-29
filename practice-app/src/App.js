import './App.css';
import Header from './Header';
import Todos from './Todos';
import { useState } from 'react';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [message, setMessage] = useState("");
       let todo=[
    { id: 1, title: 'Learn React', completed: false },
    { id: 2, title: 'Build a Todo App', completed: false },
    { id: 3, title: 'Deploy the App', completed: false },
  ]
 let [todos, setTodos] = useState(() => {
    let storedTodos = localStorage.getItem("todos");

    return storedTodos
        ? JSON.parse(storedTodos)
        : todo;
});

  function handleDelete(id) {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    setMessage("yeah you did task");

    setTimeout(() => {
        setMessage("");
    }, 2000);
  }
  function onAdd(e){
    if(e === ""){
        setMessage("Please enter a valid todo");
        setTimeout(() => {
            setMessage("");
        }, 2000);
    } else {
        setTodos([...todos, {id: Date.now(), title: e, completed: false}]);
    }
  }
function onComplete(id) {
  const updatedTodos = todos.map((todo) => {
    if (todo.id === id) {
      return {
        ...todo,
        completed: !todo.completed
      };
    }

    return todo;
  });

  setTodos(updatedTodos);
}
function onEdit(id, newTitle) {
  const updatedTodos = todos.map((todo) => {
    if (todo.id === id) {
      return {
        ...todo,
        title: newTitle
      };
    }

    return todo;
  });

  setTodos(updatedTodos);
}
// useEffect(() => {
//     let storedTodos = localStorage.getItem("todos");
//     setTodos(storedTodos ? JSON.parse(storedTodos) : []);
// },[]);
useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
}, [todos]);
  return (
    <div className="card p-4 shadow">
       <Header />
      <Todos todos={todos} onDelete={handleDelete} onAdd={onAdd} message={message} onComplete={onComplete} onEdit={onEdit} />
      {/* <HideAndShow/> */}
      {/* <Count/>  */}
      {/* <Grade/> */}
    </div>
  );
}

export default App;
