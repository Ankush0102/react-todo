import React, { useState } from 'react'
import './App.css'
import Form from './components/form/Form'
import ToDoList from './components/todoList/ToDoList'

export default function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <header>
        <h1>Todo App</h1>
      </header>
      <Form setTodos={setTodos} todos={todos} setInputText={setInputText} inputText={inputText} />
      <ToDoList setTodos={setTodos} todos={todos} />
    </div>
  )
}
