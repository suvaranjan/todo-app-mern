import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Navbar from "../components/Navbar";
import { TodoProvider } from "../context/TodoContext";
import LoadingOverlay from "../components/LoadingOverlay";

export default function PrivateLayout() {
  const { user, loading } = useAuth();

  if (!user && !loading) {
    return <Navigate to="/auth/login" replace />;
  }

  return (
    <TodoProvider>
      <Navbar />
      <div className="relative p-6 min-h-[calc(100vh-64px)]">
        <Outlet />

        {loading && (
          <div className="absolute inset-0 z-50">
            <LoadingOverlay />
          </div>
        )}
      </div>
    </TodoProvider>
  );
}
