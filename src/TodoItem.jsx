import React, { useState } from "react";
const TodoItem = ({ text, deleteTodo, todo, editTodo, toggleComplete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedText, setUpdatedText] = useState(todo.text);

  const handleEdit = () => {
    if (updatedText.trim() !== "") {
      editTodo(todo._id, updatedText);
      setIsEditing(false);
    }
  };

  return (
    <li className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-100 to-blue-300 border border-blue-400 rounded-xl shadow-md hover:scale-105 transform transition duration-300">
      {isEditing ? (
        <input
          type="text"
          value={updatedText}
          onChange={(e) => {
            setUpdatedText(e.target.value);
          }}
          className="flex-grow p-2 border border-gray-300 rounded-lg"
        />
      ) : (
        <span className="text-gray-700 flex-grow">{todo.text}</span>
      )}

      <div className="space-x-3 flex">
        {isEditing ? (
          <>
            <button
              className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-150 ml-2 "
              onClick={handleEdit}
            >
              Save
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-150"
            >
              Cancel
            </button>
          </>
        ) : (
          <button
            className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition duration-150"
            onClick={() => setIsEditing(true)}
          >
            Edit
          </button>
        )}
        <button
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-150"
          onClick={() => toggleComplete(todo._id, todo.isCompleted)}
        >
          Complete
        </button>

        <button
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-150"
          onClick={() => deleteTodo(todo._id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
