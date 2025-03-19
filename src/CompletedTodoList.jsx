const CompletedTodoList = ({ todos, toggleComplete, deleteTodo }) => {
  const completedTodos = todos.filter((todo) => todo.isCompleted === true);
  return (
    <section>
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Completed Todos
      </h2>
      <ul className="space-y-4">
        {completedTodos.map((todo) => (
          <li
            key={todo._id}
            className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-200 to-gray-400 border border-gray-500 rounded-xl shadow-md hover:scale-105 transform transition duration-300"
          >
            <span className="line-through text-gray-500">{todo.text}</span>
            <div className="space-x-3">
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-150"
                onClick={() => toggleComplete(todo._id, todo.isCompleted)}
              >
                Undo
              </button>
              <button
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-150"
                onClick={() => deleteTodo(todo._id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CompletedTodoList;
