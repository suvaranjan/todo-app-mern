import { useState } from "react";

export default function TodoForm({ initialValue = "", onSubmit, submitLabel }) {
  const [input, setInput] = useState(initialValue);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    onSubmit(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        value={input}
        defaultValue={initialValue}
        onChange={(e) => setInput(e.target.value)}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent transition"
        placeholder="What needs to be done?"
      />
      <button
        type="submit"
        className="w-full py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition font-medium"
      >
        {submitLabel}
      </button>
    </form>
  );
}
