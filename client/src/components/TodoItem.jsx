import { Check, Trash2, Pencil } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const TodoItem = ({ todo, index, onToggleComplete, onDelete }) => {
  const navigate = useNavigate();

  return (
    <li className="flex items-center justify-between px-4 py-3 bg-white rounded-lg shadow-sm transition-all duration-200">
      <div
        className="flex items-center flex-1 cursor-pointer gap-3 min-w-0"
        onClick={() => onToggleComplete(todo.id)}
      >
        <span className="text-gray-400 w-6 text-right font-medium">
          {index + 1}.
        </span>

        <button
          className={`flex-shrink-0 w-5 h-5 flex items-center justify-center rounded-md border-2 ${
            todo.completed
              ? "bg-blue-500 border-blue-500"
              : "border-gray-300 hover:border-blue-400"
          } transition-colors duration-200`}
          aria-label={
            todo.completed ? "Mark as incomplete" : "Mark as complete"
          }
        >
          {todo.completed && <Check className="w-3 h-3 text-white" />}
        </button>

        <span
          className={`truncate text-sm font-medium min-w-0 ${
            todo.completed ? "line-through text-gray-400" : "text-gray-700"
          }`}
        >
          {todo.text}
        </span>
      </div>

      <div className="flex gap-2 ml-3">
        <button
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/todos/${todo.id}/edit`);
          }}
          className="flex items-center text-xs px-3 py-1.5 rounded-md bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors duration-200"
        >
          <Pencil className="w-3.5 h-3.5 mr-1.5" />
          <span className="hidden sm:inline">Edit</span>
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onDelete(todo.id);
          }}
          className="flex items-center text-xs px-3 py-1.5 rounded-md bg-red-50 text-red-600 hover:bg-red-100 transition-colors duration-200"
        >
          <Trash2 className="w-3.5 h-3.5 mr-1.5" />
          <span className="hidden sm:inline">Delete</span>
        </button>
      </div>
    </li>
  );
};
