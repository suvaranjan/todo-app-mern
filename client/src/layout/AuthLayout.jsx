import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import LoadingOverlay from "../components/LoadingOverlay";

export default function AuthLayout() {
  const { user, loading } = useAuth();

  if (loading) {
    return <LoadingOverlay fullScreen />;
  }

  if (user) {
    return <Navigate to="/todos" replace />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-200 px-4">
      <Outlet />
    </div>
  );
}
