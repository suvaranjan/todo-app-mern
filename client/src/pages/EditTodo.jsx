import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import TodoForm from "../components/TodoForm";
import { useTodos } from "../context/TodoContext";
import api from "../lib/api";

export default function EditTodo() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { updateTodo } = useTodos();

  const [initialValue, setInitialValue] = useState("");
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    fetchTodo();
  }, []);

  const fetchTodo = async () => {
    try {
      setLoading(true);
      const res = await api.get(`/todos/${id}`);
      if (res.status === 200 && res.data) {
        setInitialValue(res.data.text);
      } else {
        navigate("/todos");
      }
    } catch (err) {
      console.log("Fetch error:");
      navigate("/todos");
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async (updatedText) => {
    setSubmitting(true);
    try {
      await updateTodo(id, { text: updatedText });
      navigate("/todos");
    } catch (err) {
      console.error(
        "Update error:",
        err?.response?.data?.message || err.message
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex justify-center px-4 py-8">
      <div className="w-full max-w-md mt-5">
        <h1 className="text-center text-2xl font-semibold mb-5">Edit Task</h1>
        <TodoForm
          initialValue={initialValue}
          onSubmit={handleUpdate}
          submitLabel={submitting ? "Updating..." : "Update Task"}
          disabled={submitting || loading}
        />
      </div>
    </div>
  );
}
