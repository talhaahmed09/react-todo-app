const Form = ({setInputText, setTodos, todos, inputText, setStatus, edit}) => {
  const handleInputChange = (e) => {
      setInputText(e.target.value);
  };

  const handleFormSubmit = e => {
  
      e.preventDefault();
      if (edit.isEdit) {
        setTodos(todos.map((item) => {
            if(item.id === edit.id){
                return {
                    ...item, text: inputText
                }
            }
            return item;
        }));
        return  setInputText("");;

      }
      setTodos([
          ...todos,  
          {text: inputText, isCompleted: false, id: Math.random() * 1000}
      ]);

      setInputText("");
  }

  const statusHandler = (e) => {
      setStatus(e.target.value);
  }

  return (
    <form>
      <input type="text" value={inputText} className="todo-input" onChange={handleInputChange} />
      <button className="todo-button" type="submit" onClick={handleFormSubmit}>
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo" onChange={statusHandler}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
