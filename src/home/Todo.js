import React from 'react'
import "./TaskList.css"; 

export default function Todo({text,toDos,setToDos,todo}) {
    //Events Done And Delete
    const deleteHandler = () => {
         setToDos(toDos.filter(el => el.id !== todo.id));
    }
    const doneHandler = () => {
        setToDos(toDos.map(item => {
            if (item.id === todo.id){
                return {
                    ...item, completed: !item.completed
                };
            }
            return item;
        })
        )
    }
  return (
   <>
    <div className='todo'>
        <li className={`todoItem ${todo.completed ? "completed" : ''}`}>{text}</li>
        <div className='taskControls'>
    <button onClick={doneHandler} className='doneBtn'><i className="fa-solid fa-check"></i></button>
    <button onClick={deleteHandler} className='deleteBtn'> <i className="fa-solid fa-x"></i> </button>
    </div>
    </div>
</>
  )
}
