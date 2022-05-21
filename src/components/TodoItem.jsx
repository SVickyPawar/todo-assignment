import React, { useState } from 'react'
import styles from './todo.module.css'

const TodoItem = ({todo, onDelete}) => {
    let [isCompleted,setIsCompleted]=useState(todo.isCompleted)
  return (
    <div className={styles.todo}  key={todo.id}>
    <input type="checkbox" checked={isCompleted} onChange={(e)=>{console.log(e.target.checked)
    setIsCompleted(e.target.checked)
    }} />
     <div className={ isCompleted ? styles.striked :""}>{todo.newTodo}</div>
      <button onClick={()=>{onDelete(todo.id)}} className={styles.btn}>Delete</button>
</div>
  )
}

export default TodoItem