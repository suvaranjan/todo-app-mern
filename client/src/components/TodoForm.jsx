import { useState, useEffect } from "react";

export default function TodoForm({
  initialValue = "",
  onSubmit,
  submitLabel,
  disabled = false,
}) {
  const [input, setInput] = useState(initialValue);

  useEffect(() => {
    setInput(initialValue);
  }, [initialValue]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim() || disabled) return;
    onSubmit(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent transition disabled:opacity-50"
        placeholder="What needs to be done?"
        disabled={disabled}
      />
      <button
        type="submit"
        className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-800 transition font-medium disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={disabled}
      >
        {submitLabel}
      </button>
    </form>
  );
}
