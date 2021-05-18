import React from 'react'
import ToDo from './ToDo'

const ToDoList = ({ todos, setTodos }) => {
    return (
        <div>
            <div className="todo-container">
                <ul className="todo-list">
                    {todos.map(item => (
                        <ToDo setTodos={setTodos} todos={todos} todo={item} key={item.id} text={item.text} />
                    ))}
                </ul>
            </div>
        </div>
    )
}



export default ToDoList
