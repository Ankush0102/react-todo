import React from 'react'

const Form = (props) => {

    const handleChange = (evt) => {
        props.setInputText(evt.target.value)
    }

    const handleClick = (evt) => {
        evt.preventDefault();
        props.setTodos([...props.todos, { text: props.inputText, completed: false, id: Math.random() * 100 }])
        props.setInputText("")
    }
    return (
        <form>
            <input type="text" value={props.inputText} className="todo-input" onChange={handleChange} />
            <button className="todo-button" type="submit" onClick={handleClick}>
                <i className="fas fa-plus-square"></i>
            </button>
        </form>
    )
}

export default Form