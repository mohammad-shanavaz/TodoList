import React from 'react'

export default function TodoCard(props) {
    const {children,deleteTask, index,editTask}=props
  return (
    <li className='todoItem'>{children} 
        <div className='actionsContainer'>
        <button title='Edit Task' onClick={()=>{
            editTask(index)
        }}>
            <i className="fa-regular fa-pen-to-square"></i>
        </button>
        <button title='Delete Task' onClick={()=>{
            deleteTask(index)
        }}>
            <i className="fa-solid fa-eraser"></i>
        </button>
        </div>
   </li>
  )
}
