import React, { useEffect, useState } from 'react'
import TodoList from './components/TodoList'
import Todoinput from './components/Todoinput'

export default function App() {
  const [todos,setTodos]=useState([])
  const [todoValue,setTodoValue]=useState('')
  const [editingIndex, setEditingIndex] = useState(null);


  function persistData(newList) {
    localStorage.setItem('todos', JSON.stringify({ todos: newList }))
  }

  function addNewTask(newTodo){
    if (editingIndex !== null) {
      const newTask = [...todos];
      newTask.splice(editingIndex, 0, newTodo);
      persistData(newTask);
      setTodos(newTask);
      setTodoValue('');
      setEditingIndex(null);
    } else {
      const newTask = [...todos, newTodo];
      persistData(newTask);
      setTodos(newTask);
      setTodoValue('');
    }
  }

  function editTask(index){
    const edit=todos[index]
    setTodoValue(edit)
    setEditingIndex(index)
    deleteTask(index)
  }

  function clearAll() {
    setTodos([]);
    persistData([]);
  }


  function deleteTask(index){
    const newTodoList=todos.filter((todo,todoIndex)=>{
      return todoIndex!==index
    })
    setTodos(newTodoList)
  }

  useEffect(()=>{
    if(!localStorage)
    {
       return
    }
    let localtodo=localStorage.getItem('todos')
    if(!localtodo)
    {
      return 
    }
    const parsedTodo=JSON.parse(localtodo).todos
    setTodos(parsedTodo)
  },[])

  return (
    <main>
      <h1 className='centered'>TODO LIST</h1>
      <Todoinput clearAll={clearAll} todoValue={todoValue} setTodoValue={setTodoValue} addNewTask={addNewTask}/>
      <TodoList todos={todos} editTask={editTask} deleteTask={deleteTask}/>
    </main>
  )
}
