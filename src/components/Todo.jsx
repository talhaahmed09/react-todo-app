const Todo = ({todo, setTodos, todos, setInputText, setEdit}) => {

    const deleteHandler = () => {
        setTodos(todos.filter(el => el.id !== todo.id))
    }

    const completeHandler = () => {
        setTodos(todos.map((item) => {
            if(item.id === todo.id){
                return {
                    ...item, isCompleted: !todo.isCompleted
                }
            }
            return item;
        }))
    }

    const editHandler = () => {
        setInputText(todo.text);
        setEdit({isEdit: true, id:todo.id});
        console.log(todo.text)
    }

    return (
        <div className="todo">
            <li className={`todo-item ${todo.isCompleted ? 'completed' : ''}`}>{todo.text}</li>
            <button className="complete-btn" onClick={completeHandler}>
                <i className="fas fa-check"></i>
            </button>
            <button className="complete-btn" onClick={editHandler}>
                <i className="fas fa-edit"></i>
            </button>
            <button className="trash-btn" onClick={deleteHandler}>
                <i className="fas fa-trash"></i>
            </button>
        </div>
    )
}

export default Todo;