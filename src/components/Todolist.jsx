import React from 'react'

const Todolist = ({children}) => {
  return (
    <div className='listdiv'>
        <h1>List</h1>
        <div className='Listdata'>{children}</div>
    </div>
   
  )
}

export default Todolist