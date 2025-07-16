import { useNavigate } from "react-router-dom";
import TodoForm from "../components/TodoForm";
import { useTodos } from "../context/TodoContext";

export default function AddTodo() {
  const { addTodo, loading } = useTodos();
  const navigate = useNavigate();

  const handleAdd = async (newTodoText) => {
    try {
      await addTodo(newTodoText);
      navigate("/todos");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center px-4 py-8">
      <div className="w-full max-w-md mt-5">
        <h1 className="text-center text-2xl font-semibold mb-5">Add Task</h1>
        <TodoForm
          onSubmit={handleAdd}
          submitLabel={
            loading.isLoading && loading.type === "add-todo"
              ? "Adding..."
              : "Add Task"
          }
          disabled={loading.isLoading && loading.type === "add-todo"}
        />
      </div>
    </div>
  );
}
