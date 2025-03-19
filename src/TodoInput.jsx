const TodoInput = ({ newTodo, setNewTodo, addTodo }) => {
  return (
    <div className="flex mb-6 space-x-4">
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        className="flex-grow p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-700"
        placeholder="Add a new task"
      />

      <button
        onClick={addTodo}
        className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-200"
      >
        Add Todo
      </button>
    </div>
  );
};

export default TodoInput;
