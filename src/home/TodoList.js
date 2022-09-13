import React from 'react'
import Todo from './Todo'
import "./TaskList.css"

export default function TodoList({toDos,setToDos,filteredTodos}) {
  return (
    <>
      <div className='toDoListContainer'>

<ul className='toDoItemsList'>
{filteredTodos.map((todo) => (
    <Todo setToDos={setToDos} toDos={toDos} todo={todo} text={todo.text} key={todo.id}/>
))}

</ul>

</div>
    </>
  )
}
