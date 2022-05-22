import React from 'react'
import "../App.css";
import Todolist from '../components/Todolist';
import Todoitems from '../components/Todoitems';

const Todo = () => {

    const [todos, setTodos] = React.useState([]);
    let [newTodo, setNewTodo] = React.useState(""); //useState can only be used here
    // const [isComplelted, setIsCompleted] = React.useState(todo.isComplelted)
    // const deleteTd = (e) =>{
    //     setNewTodo(todos.filter((todo)=> todo.id !== e)); //this "e" that is actually an event will always be their 
    // }
    const handleChange = (e) =>{
        setNewTodo(e.target.value)

    }
    const deleteTd=(id)=>{
        setTodos(todos.filter((todo)=> todo.id !== id))
    }

    //onchange of Input read value;
    //store the value;
    //onclick of add button,
    //read the stored value and aa it to my Todo list
  return ( //useState cannot be used here
    <div> 
        <h1>Todo</h1>
        <div className='inputDiv'>
        <input className='inputData' value={newTodo} placeholder='Enter your Text' onChange={handleChange}/>
        <br />
        <button 
            onClick={()=>{
               setTodos([...todos, 
                {
                    id:Date.now(),
                    value:newTodo,
                    isComplelted:false
                },// isComplelted:false}, //id and isCompleted is an dummy Data
                   //this ...todo is used for spreading the data however it is also used in mapping below
                   //here Date.now gives and random number and react need a key so that since every tym a new div is created 
                   //react needs a unique value to remove the error which is why date.now is used
               ])
               setNewTodo("");
            }}
        >Add</button>
        </div>
        
        <Todolist>
            <div>
                {todos.map((todo)=>(
                    <Todoitems key={todo.id} todo={todo} deleteTd={deleteTd}/>
                ))}
            </div>
        </Todolist>
        
    </div>
    
  )
}

export default Todo