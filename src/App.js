import "./App.css";

import Pomodoro from "./home/Pomodoro";
import Form from "./home/Form";
import TodoList from "./home/TodoList";
import { useState, useEffect } from "react";

function App() {
  //Todo States
  const [inputText, setInputText] = useState("");
  const [toDos, setToDos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    getLocalTodos();
  }, []);
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [toDos, status]);

  // functions
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(toDos.filter((todo) => todo.completed));
        break;
      case "uncomplited":
        setFilteredTodos(toDos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(toDos);
        break;
    }
  };
  // Local saving todos
  const saveLocalTodos = () => {
    if(toDos.length > 0) {localStorage.setItem("toDos", JSON.stringify(toDos));
  }};
  const getLocalTodos = () => {
    if (localStorage.getItem("toDos") === null) {
      localStorage.setItem("toDos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("toDos"));
      setToDos(todoLocal);
    }
  };

  return (
    <div className="App">
      <Pomodoro />

      <Form
        inputText={inputText}
        toDos={toDos}
        setToDos={setToDos}
        setInputText={setInputText}
        setStatus={setStatus}
      />

      <TodoList
        setToDos={setToDos}
        toDos={toDos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
