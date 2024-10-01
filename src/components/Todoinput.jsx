import React from 'react'

export default function Todoinput(props) {
    const {addNewTask,todoValue,setTodoValue,clearAll}=props
    const handleKeyPress=(event)=>{
        if(event.key==='Enter')
        {
            addNewTask(todoValue)
            setTodoValue('')
        }
    }
  return (
    <header>
    <input type='text' onKeyUp={handleKeyPress} value={todoValue} onChange={(e)=>
        setTodoValue(e.target.value)
    } placeholder='Enter Task...' />
    <button title='Add Task' onClick={()=>{
        addNewTask(todoValue)
        setTodoValue('')
    }}><i class="fa-solid fa-square-plus"></i></button> 
    <button title='Clear All' onClick={()=>{
        clearAll()
    }}><i class="fa-regular fa-circle-xmark"></i></button>
    </header>
  )
}
