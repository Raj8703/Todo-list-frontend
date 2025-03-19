import TodoItem from "./TodoItem";

const TodoList = ({ todos, deleteTodo, toggleComplete, editTodo }) => {
  const incompleteTodos = todos.filter((todo) => todo.isCompleted === false);
  return (
    <ul className="space-y-4 mb-10">
      {incompleteTodos.map((todo) => (
        <TodoItem
          key={todo._id}
          todo={todo}
          text={todo.text}
          deleteTodo={deleteTodo}
          toggleComplete={toggleComplete}
          editTodo={editTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
