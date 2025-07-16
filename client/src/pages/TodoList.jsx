import { useNavigate } from "react-router-dom";
import { Plus, Loader2 } from "lucide-react";
import { useTodos } from "../context/TodoContext";
import { TodoItem } from "../components/TodoItem";

const TodoList = () => {
  const { todos, deleteTodo, toggleComplete, loading } = useTodos();
  const navigate = useNavigate();

  const isFetchingTodos = loading.isLoading && loading.type === "fetch-todos";

  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
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

      {isFetchingTodos ? (
        <div className="flex justify-center items-center py-10">
          <Loader2 className="h-6 w-6 text-gray-500 animate-spin" />
          <span className="ml-2 text-gray-500">Loading tasks...</span>
        </div>
      ) : todos.length === 0 ? (
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
        <ul className="space-y-2">
          {todos.map((todo, index) => (
            <TodoItem
              key={todo._id}
              index={index}
              todo={todo}
              onToggleComplete={() => toggleComplete(todo)}
              onDelete={() => deleteTodo(todo._id)}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;
