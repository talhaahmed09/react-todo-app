import "./App.css";
import { useState, useEffect } from "react";
import Form from "./components/Form.jsx";
import TodoList from "./components/TodoList.jsx";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [edit, setEdit] = useState({isEdit:false, id:null});

  useEffect(() => {
    filterHandler();
  }, [todos, status]);

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.isCompleted === true));
        break;

      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.isCompleted === false));
        break;

      default:
        setFilteredTodos(todos);
    }
  };

  return (
    <div className="App">
      <header>
        <h1> Todo List</h1>
      </header>
      <Form
        setInputText={setInputText}
        setTodos={setTodos}
        todos={todos}
        inputText={inputText}
        setStatus={setStatus}
        edit={edit}
      />
      <TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos}  setInputText={setInputText} setEdit={setEdit}/>
    </div>
  );
}

export default App;
