import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/TodoSlice';

function AddTodo() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (input.trim() === "") return; // prevent adding empty todos
    dispatch(addTodo(input.trim()));
    setInput('');
  };

  return (
  <div className=" p-4 flex flex-col items-center">
  <h1 className="bg-slate-600 rounded-2xl p-4 text-3xl sm:text-4xl text-center text-white font-bold mb-6 w-full max-w-full">
    ToDo's Application
  </h1>

  <form
    onSubmit={addTodoHandler}
    className="flex gap-4 justify-center items-center w-full max-w-xl"
  >
    <input
      type="text"
      value={input}
      placeholder="Enter a todo..."
      onChange={(e) => setInput(e.target.value)}
      className="w-80 outline-none rounded-lg px-4 py-2 bg-white shadow-sm border border-gray-300 focus:ring-2 focus:ring-slate-500"
    />
    <button
      type="submit"
      className="bg-slate-600 text-white px-4 py-2 rounded-lg hover:bg-slate-700 active:scale-95 transition"
    >
      Add Todo
    </button>
  </form>
</div>

);

}

export default AddTodo;
