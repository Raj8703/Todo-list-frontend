import React from "react";
import CompletedTodoList from "./CompletedTodoList";
import TodoList from "./TodoList";
import TodoInput from "./TodoInput";
import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5500/api/todos/getall")
      .then((res) => setTodos(res.data));
  }, []);

  const addTodo = () => {
    if (newTodo.trim() === "") {
      alert("Enter some task");
      return;
    }
    axios
      .post("http://localhost:5500/api/todos/add", { text: newTodo })
      .then((res) => setTodos([...todos, res.data]));
    setNewTodo("");
  };

  const deleteTodo = (id) => {
    axios.delete(`http://localhost:5500/api/todos/${id}`).then(() => {
      setTodos(todos.filter((todo) => todo._id !== id));
    });
  };

  const toggleComplete = (id, isCompleted) => {
    axios
      .patch(`http://localhost:5500/api/todos/${id}`, {
        isCompleted: !isCompleted,
      })
      .then(() => {
        setTodos(
          todos.map((todo) =>
            todo._id === id ? { ...todo, isCompleted: !isCompleted } : todo
          )
        );
      })
      .catch((error) => {
        console.error("Error toggling todo completion status:", error);
      });
  };
  const editTodo = (id, updatedText) => {
    axios
      .put(`http://localhost:5500/api/todos/${id}`, { text: updatedText })
      .then((res) => {
        // Update the todo in the state instead of removing it
        setTodos(
          todos.map((todo) =>
            todo._id === id ? { ...todo, text: updatedText } : todo
          )
        );
      })
      .catch((error) => {
        console.error("Error toggling todo completion status:", error);
      });
  };

  return (
    <div className="bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 font-sans min-h-screen flex items-center justify-center">
      <div className="max-w-4xl w-full p-6 bg-white shadow-lg rounded-lg bg-opacity-90">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Todo List
        </h1>

        <TodoInput
          newTodo={newTodo}
          setNewTodo={setNewTodo}
          addTodo={addTodo}
        />
        <TodoList
          todos={todos}
          deleteTodo={deleteTodo}
          toggleComplete={toggleComplete}
          editTodo={editTodo}
        />
        <CompletedTodoList
          todos={todos}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
        />
      </div>
    </div>
  );
};

export default App;
