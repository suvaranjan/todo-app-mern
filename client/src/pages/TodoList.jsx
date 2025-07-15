import { useState } from "react";
import { TodoItem } from "../components/TodoItem";
import { useNavigate } from "react-router-dom";
import { Plus } from "lucide-react";

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a Todo App", completed: true },
    { id: 3, text: "Deploy to production", completed: false },
  ]);

  const navigate = useNavigate();

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Tasks</h1>
        <button
          onClick={() => navigate("/todos/add")}
          className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          <Plus className="w-4 h-4" />
          <span>Add Task</span>
        </button>
      </div>

      {/* List */}
      <ul className="space-y-2">
        {todos.length === 0 ? (
          <div className="py-8 text-center">
            <p className="text-gray-500">Your task list is empty</p>
            <button
              onClick={() => navigate("/todos/add")}
              className="mt-3 text-sm text-blue-600 hover:text-blue-800 font-medium"
            >
              Add your first task
            </button>
          </div>
        ) : (
          todos.map((todo, index) => (
            <TodoItem
              key={todo.id}
              index={index}
              todo={todo}
              onToggleComplete={toggleComplete}
              onDelete={deleteTodo}
            />
          ))
        )}
      </ul>
    </div>
  );
};

export default TodoList;
