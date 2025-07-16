import { createBrowserRouter, Navigate } from "react-router-dom";
import AuthLayout from "./layout/AuthLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AddTodo from "./pages/AddTodo";
import TodoList from "./pages/TodoList";
import Profile from "./pages/Profile";
import PrivateLayout from "./layout/PrivateLayout";
import EditTodo from "./pages/EditTodo";

export const router = createBrowserRouter([
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
    ],
  },
  {
    path: "/",
    element: <PrivateLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="todos" replace />,
      },
      {
        path: "todos",
        element: <TodoList />,
      },
      {
        path: "todos/add",
        element: <AddTodo />,
      },
      {
        path: "todos/:id/edit",
        element: <EditTodo />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
]);
