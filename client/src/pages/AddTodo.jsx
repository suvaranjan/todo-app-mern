import TodoForm from "../components/TodoForm";

export default function AddTodo() {
  const handleAdd = (newTodoText) => {
    console.log("📝 New Todo:", newTodoText);
  };

  return (
    <div className="flex justify-center px-4 py-8">
      <div className="w-full max-w-md mt-5">
        <h1 className="text-center text-2xl font-semibold mb-5">Add Task</h1>
        <TodoForm onSubmit={handleAdd} submitLabel="Add Task" />
      </div>
    </div>
  );
}
