import React from 'react';
import {useState} from 'react'
import styles from './todo.module.css'
import TodoItem from './TodoItem';

const Todo = () => {

    let [newTodo,setTodo]=useState("")
    const [todos,setTodos]=useState([]);

    const onDelete=(id)=>{
        let value=todos.filter((todo) => (todo.id !== id))
        setTodos(value);
    }

    // const addTodo=(e)=>{
    //     console.log(e.target)
    // }
    const handleChange=(e)=>{
        //newTodo=e.target.value      
        //We can do it another way as well;
        setTodo(e.target.value)
    }
  return (
    <div>
        <h3>Todo</h3>
        <hr />
        <h3>Track Your Activity</h3>
        <input value={newTodo} onChange={handleChange} type="text" placeholder='Enter Task'/>
        <button onClick={()=>{
            console.log(newTodo);
            todos.push({newTodo:newTodo,id:Date.now()});
            setTodos([...todos])
            setTodo("")
            // console.log(todos)
        }} >Add Task</button>

        
        {todos.map((todo)=>{
            return (
               <TodoItem key={todo.id} todo={todo} onDelete={onDelete}/>
               
            ) 
        })}
        
        
    </div>
  )
}

export default Todo