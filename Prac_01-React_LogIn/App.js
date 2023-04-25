import React, { useState } from "react";
import Form from "./components/Home/input/Form";
import List from "./components/Home/output/List";
import Header from "./components/header/Header";
import LogIn from "./components/login/LogIn";
import './App.css';

const App = (props) => {
  const [newUsers, setNewUser] = useState([]);

  const addNewUser = (uName, uAge) => {
    setNewUser((prevUser) => {
      return [...prevUser, { name: uName, age: uAge }]
    });
  };

  const [showForm, setShowForm] = useState(false);

  const closeForm = () => {
    setShowForm(false);
  };

  const logIn = (email, password) => {
    setShowForm(true);
    console.log(email, password);
  }
  return (
    <div>
      <header>
        <Header show={showForm} onLogout={closeForm}/>
      </header>
      {showForm && <div className="main-app">
        <Form onInput={addNewUser} />
        <List users={newUsers} />
      </div>}

      {!showForm && <LogIn onLogin={logIn}/>}
    </div>
  );
};

export default App;