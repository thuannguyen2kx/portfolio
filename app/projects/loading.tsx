export default function Loading() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="flex flex-col items-center gap-8">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 border-4 border-gray-800 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-t-white rounded-full animate-spin"></div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-white text-xl font-light tracking-widest">
            Loading
          </span>
          <span className="flex gap-1">
            <span
              className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"
              style={{ animationDelay: "0ms" }}
            ></span>
            <span
              className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"
              style={{ animationDelay: "150ms" }}
            ></span>
            <span
              className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"
              style={{ animationDelay: "300ms" }}
            ></span>
          </span>
        </div>
      </div>
    </div>
  );
}
