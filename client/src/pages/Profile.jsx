import { useNavigate } from "react-router-dom";
import UpdateProfile from "../components/UpdateProfile";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";

export default function Profile() {
  const { user, logout } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  if (isEditing) {
    return <UpdateProfile onCancel={() => setIsEditing(false)} />;
  }

  return (
    <div className="max-w-md mx-auto px-4 py-10">
      <div className="bg-white shadow-md rounded-xl p-6 border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Your Profile
        </h2>

        <div className="space-y-3 mb-6">
          <div>
            <p className="text-sm text-gray-500">Username</p>
            <p className="font-medium text-gray-800">
              {user?.username || "N/A"}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Email</p>
            <p className="font-medium text-gray-800">{user?.email || "N/A"}</p>
          </div>
        </div>

        <div className="flex justify-between gap-4">
          <button
            onClick={() => setIsEditing(true)}
            className="flex-1 py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Update
          </button>
          <button
            onClick={() => {
              logout();
              navigate("/auth/login");
            }}
            className="flex-1 py-2 px-4 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
