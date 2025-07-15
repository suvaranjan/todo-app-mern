import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";
import AuthLayout from "./layout/AuthLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import AddTodo from "./pages/AddTodo";
import TodoList from "./pages/TodoList";
import Profile from "./pages/Profile";
// import EditTodo from "./pages/EditTodo";

export const router = createBrowserRouter([
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/",
    element: <RootLayout />,
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
        path: "profile",
        element: <Profile />,
      },
    ],
  },
]);

function RootLayout() {
  return (
    <div>
      <Navbar />
      <div className="p-6">
        <Outlet />
      </div>
    </div>
  );
}
