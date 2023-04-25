import React, { useState } from 'react';
import InputForm from './components/InputForm';
import StoreForm from './components/StoreForm';
import Header from './components/Header/Header';
import './App.css';


const App = props => {

  const [formText, setFotmText] = useState([
    { id: Math.random().toString(), text: 'Wake up ar 6.00' },
    { id: Math.random().toString(), text: 'Fixing bed' }
  ]);

  const formInputsHandler = (text) => {
    // setFotmText(prevState => {
    //  return[...prevState, {text:text, id: Math.random().toString()}]; 
    // });

    setFotmText((prevState) => {
      const addInput = [...prevState];
      // addInput.push({text:text, id: Math.random().toString()});
      addInput.unshift({ text: text, id: Math.random().toString() });

      return addInput;
    })
  };

  // const removeItem = (index) => {
  //   setFotmText((prevState) => {
  //     const remove = prevState.filter(key => key !== index);
  //     return remove;
  //   });
  // }

  return (
    <div className='back_ground'>
      <section>
        <Header />
        <InputForm formInputs={formInputsHandler} />
        <StoreForm
          sttext={formText}
        />
      </section>
    </div>
  )
}

export default App;