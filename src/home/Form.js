import React, {useState,useEffect} from 'react'
import './Form.css'
import Todo from './Todo';

export default function Form({filteredTodos, setStatus,setInputText,toDos,setToDos,inputText,todo}) {

    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);
    };
    const submitTodoHandler = (e) => {
        e.preventDefault(); 
        setToDos([
            ...toDos,
            {text: inputText, completed: false, id: Math.random() * 1000}
        ])
        setInputText("");
    }
    const statusHandler = (e) => {
       setStatus(e.target.value);
    }
  return (
    <>
    <form >
       <div className='insertNewTask'>
        <input placeholder='Type your task'  value={inputText} onChange={inputTextHandler} type='text' className='toDoInput'/>
        <button onClick={submitTodoHandler} className='BtnAdd' type='submit'>
        <i className="fa-regular fa-plus fa-2x"></i>
        </button>
        </div>
        <div className='select'>
            <select onChange={statusHandler} name='toDos' className='SelectTodos'>
            <option value="uncomplited"> Uncompleted </option>
            <option value="completed"> Completed </option>
            <option value="all"> All </option>
            </select>

        </div>
    </form>
    </>
  )
}
