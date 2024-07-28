import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, removeTodo, updateTodo} from '../features/todo/todoSlice'
import { Pencil, Trash2 } from 'lucide-react';

const Todos = () => {
  const [input, setInput] = useState('');
  const [editingId, setEditingId] = useState(null);
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;

    if (editingId !== null) {
      dispatch(updateTodo({ id: editingId, text: input }));
      setEditingId(null);
    } else {
      dispatch(addTodo(input));
    }
    setInput('');
  };

  const handleEdit = (todo) => {
    setEditingId(todo.id);
    setInput(todo.text);
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Learn about redux toolkit</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a Todo..."
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
        >
          {editingId !== null ? 'Update Todo' : 'Add Todo'}
        </button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center justify-between bg-gray-100 p-2 mb-2 rounded"
          >
            <span>{todo.text}</span>
            <div>
              <button
                onClick={() => handleEdit(todo)}
                className="mr-2 text-blue-500"
              >
                <Pencil size={18} />
              </button>
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="text-red-500"
              >
                <Trash2 size={18} />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;