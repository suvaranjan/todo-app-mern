import { createContext, useContext, useEffect, useState } from "react";
import api from "../lib/api";

const TodoContext = createContext();
export const useTodos = () => useContext(TodoContext);

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState({ isLoading: false, type: null });

  const setLoadingState = (isLoading, type = null) => {
    setLoading({ isLoading, type });
  };

  useEffect(() => {
    const fetchTodos = async () => {
      setLoadingState(true, "fetch-todos");
      try {
        const res = await api.get("/todos");
        setTodos(res.data);
      } catch (err) {
        console.log(
          "Fetch error:",
          err?.response?.data?.message || err.message
        );
      } finally {
        setLoadingState(false);
      }
    };

    fetchTodos();
  }, []);

  const toggleComplete = (todo) => {
    updateTodo(todo._id, { completed: !todo.completed });
  };

  const addTodo = async (text) => {
    setLoadingState(true, "add-todo");
    try {
      const res = await api.post("/todos/add", { text });
      setTodos((prev) => [...prev, res.data]);
    } catch (err) {
      console.log("Add error:", err?.response?.data?.message || err.message);
    } finally {
      setLoadingState(false);
    }
  };

  const updateTodo = async (id, updates) => {
    setLoadingState(true, "update-todo");
    try {
      const res = await api.put(`/todos/${id}`, updates);
      setTodos((prev) =>
        prev.map((todo) => (todo._id === id ? res.data : todo))
      );
    } catch (err) {
      console.log("Update error:", err?.response?.data?.message || err.message);
    } finally {
      setLoadingState(false);
    }
  };

  const deleteTodo = async (id) => {
    setLoadingState(true, "delete-todo");
    try {
      await api.delete(`/todos/${id}`);
      setTodos((prev) => prev.filter((todo) => todo._id !== id));
    } catch (err) {
      console.log("Delete error:", err?.response?.data?.message || err.message);
    } finally {
      setLoadingState(false);
    }
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        setTodos,
        loading,
        addTodo,
        updateTodo,
        deleteTodo,
        toggleComplete,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
