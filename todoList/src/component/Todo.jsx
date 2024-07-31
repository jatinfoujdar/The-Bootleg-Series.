import React, { useState } from 'react';
import { logo } from '../constant';

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [editingTodo, setEditingTodo] = useState(null);
  const [editingText, setEditingText] = useState('');

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { text: newTodo, id: Date.now() }]);
      setNewTodo('');
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const startEditing = (todo)=>{
  setEditingTodo(todo);
  setEditingText(todo.text);
  }

  return (
    <div>
      <div className='flex items-center font-bold text-lg'>
        <img className='w-5 mr-2' src={logo} alt="Logo" />
        Todo List
      </div>
      <div className='mb-4'>
        <input
          type='text'
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className="border p-2 mr-2 rounded"
          placeholder="Add a new task"
        />
        <button onClick={addTodo} className="bg-blue-500 text-white p-2 rounded">
          Add
        </button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="flex items-center">
           {editingTodo && editingText.id === todo.id ? (
            <>
            <input
                type="text"
                value={editingText}
                onChange={(e) => setEditingText(e.target.value)}
                className="border p-2 mr-2 rounded flex-grow"
              />
              <button onClick={() => saveEdit(todo.id)} className="ml-2 bg-green-500 text-white p-1 rounded">
                Save
              </button>
              <button onClick={cancelEdit} className="ml-2 bg-gray-500 text-white p-1 rounded">
                Cancel
              </button>
            </>
           ):(
            <>
            
            <span className="flex-grow">{todo.text}</span>
            <button onClick={() => deleteTodo(todo.id)} className="ml-2 bg-red-500 text-white p-1 rounded">
              Delete
            </button>
            <button onClick={() => startEditing(todo)} className="ml-2 bg-red-500 text-white p-1 rounded">
              Edit
            </button>
            </>
           )}
            
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
