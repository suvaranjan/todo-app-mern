import { Loader2 } from "lucide-react";

export default function LoadingOverlay({ fullScreen = false }) {
  return (
    <div
      className={`z-50 flex items-center justify-center bg-white/50 backdrop-blur-sm ${
        fullScreen ? "fixed inset-0" : "absolute inset-0 rounded-lg"
      }`}
    >
      <Loader2 className="w-12 h-12 text-gray-500 animate-spin" />
    </div>
  );
}
