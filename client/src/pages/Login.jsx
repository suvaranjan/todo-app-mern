import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { z } from "zod";

// Zod schema for validation
const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email" }),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export default function Login() {
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      email: e.target.email.value.trim(),
      password: e.target.password.value.trim(),
    };

    const result = loginSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors = {};
      result.error.errors.forEach((err) => {
        fieldErrors[err.path[0]] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    console.log("✅ Valid data:", result.data);
    // TODO: Call login API
  };

  return (
    <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-lg">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Sign In
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Email Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            placeholder="you@example.com"
          />
          {errors.email && (
            <p className="text-sm text-red-500 mt-1">{errors.email}</p>
          )}
        </div>

        {/* Password Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition pr-10"
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
          disabled
        >
          Sign In
        </button>
      </form>
    </div>
  );
}
