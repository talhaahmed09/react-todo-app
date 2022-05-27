import Todo from './Todo';

const TodoList = ({todos, setTodos, filteredTodos, setInputText, setEdit}) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
          {filteredTodos.map((todo) => (
              <Todo todo={todo} key={todo.id} setTodos={setTodos} todos={todos}  setInputText={setInputText} setEdit={setEdit} />
          ))}
      </ul>
    </div>
  );
};

export default TodoList;