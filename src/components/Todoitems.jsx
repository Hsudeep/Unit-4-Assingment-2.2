import React, { useState } from 'react'
import "../App.css";
import styles from "./todo.module.css"
const Todoitems = (props,OkDelete) => {
  const [isComplelted, setIsCompleted] = useState(props.todo.isComplelted)

  
  return (
    <div className='lists'>
      <input type="checkbox" checked={isComplelted} onChange={(e)=>(
      setIsCompleted(e.target.checked)// this is how we set the value
      )} />
      <p className={isComplelted ? styles.strike : "" }>{props.todo.value}</p>
      <button onClick={()=>OkDelete(props.id)}>delete</button>
    </div>
  )
}

export default Todoitems