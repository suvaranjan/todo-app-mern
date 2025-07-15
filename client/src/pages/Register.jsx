import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function Register() {
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const username = e.target.username.value.trim();
    const email = e.target.email.value.trim();
    const password = e.target.password.value.trim();

    const newErrors = {};

    if (!username) newErrors.username = "Username is required";

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Invalid email format";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    console.log("✅ Valid Registration:", { username, email, password });

    // TODO: call register API
  };

  return (
    <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-lg">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Create Account
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Username */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Username
          </label>
          <input
            type="text"
            name="username"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            placeholder="johndoe123"
          />
          {errors.username && (
            <p className="text-sm text-red-500 mt-1">{errors.username}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition"
            placeholder="you@example.com"
          />
          {errors.email && (
            <p className="text-sm text-red-500 mt-1">{errors.email}</p>
          )}
        </div>

        {/* Password with toggle */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 pr-10 transition"
              placeholder="••••••••"
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute top-2.5 right-3 text-gray-500 hover:text-gray-800"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          {errors.password && (
            <p className="text-sm text-red-500 mt-1">{errors.password}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg transition font-semibold 
             hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
          //   disabled
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}
