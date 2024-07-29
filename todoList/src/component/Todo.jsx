import React, { useState } from 'react'
import { logo } from '../constant';

const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [newTodos, setNewTodos] = useState('');


    const addTodo = ()=>{
        if(newTodos != ''){
            setTodos([...todos,{text: newTodos, id: Date.now()}]);
            setNewTodos('');
        }
    }
  return (
    <div >
        <div className='flex items-center font-bold text-lg'>
      <img className='w-5 mr-2' src={logo} alt="Logo" />
      Todo List
    </div>
    <div className='mb-4'>
        <input type='text' value={newTodos} onChange={()=>()} 
        className="border p-2 mr-2 rounded"
          placeholder="Add a new task"
        />
         <button onClick={addTodo} className="bg-blue-500 text-white p-2 rounded">
          Add
        </button>
    </div>
    </div>
  )
}

export default Todo
