import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/TodoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col ">
      <h1 className="bg-slate-600 rounded-2xl p-1 text-xl sm:text-4xl text-center mx-auto text-white font-bold mb-6 w-96 justify-center">
        ToDo's
      </h1>
      <ul className="bg-slate-600 rounded-2xl px-3 py-2 text-xl mx-auto text-white font-bold mb-6 w-[40%] space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center bg-slate-500 px-4 py-2 rounded h-11 "
          >
            <span className="flex-1 text-left m-5">{todo.text}</span>
            <div className="space-x-2">
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="bg-red-500 hover:bg-red-700 text-white font-bold px-2 py-1 rounded"
              >
                X
              </button>
              <button
                onClick={() => {
                  const updatedText = prompt("Update Todo", todo.text);
                  if (updatedText) {
                    dispatch(updateTodo({ id: todo.id, text: updatedText }));
                  }
                }}
                className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold px-2 py-1 rounded"
              >
                U
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
