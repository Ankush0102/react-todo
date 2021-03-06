import React from 'react'

const ToDo = ({ text, todos, setTodos, todo }) => {

    const handleDelete = () => {
        setTodos(todos.filter((ele) => ele.id !== todo.id));
    }

    const handleComplete = () => {
        setTodos(todos.map((item) => {
            if (item.id == todo.id) {
                return {
                    ...item, completed: !item.completed
                }
            }
            return item
        }))
    }
    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ''}`}>{text}</li>
            <button className="complete-btn" onClick={handleComplete}>
                <i className="fas fa-check"></i>
            </button>
            <button className="trash-btn" onClick={handleDelete}>
                <i className="fas fa-trash"></i>
            </button>
        </div>
    )
}

export default ToDo