import React, { useState } from "react";
import TodoList from "./components/TodoList/TodoList";
import Form from "./components/TodoForm/Form";
import './App.css';

const App = props => {
  const [toDo, setToDo] = useState([
    {
      id: 'opd90',
      list: 'Wake up early'
    },
    {
      id: 'ew343',
      list: 'Having a shover'
    },
    {
      id: 'jfh54',
      list: 'Preparing breakfast'
    },
  ]);

  const addNewToDoList = text => {
    setToDo(prevState => {
      return [...prevState, { list: text }]
    });
  };

  return (
    <div>
      <section className="form-section">
        <Form onApp={addNewToDoList} />
      </section>
      <section className="list-section">
        <TodoList todo={toDo} />
      </section>
    </div>
  );
};

export default App;