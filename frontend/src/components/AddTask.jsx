export default function AddTask() {
  return (
    <div className="bg-black flex items-center justify-center p-6 py-16">
      <div className="w-full max-w-4xl bg-[#0f0f11] border border-white/10 rounded-3xl p-10 shadow-2xl relative overflow-hidden">
        
        {/* Subtle background glow */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl pointer-events-none"></div>

        <h2 className="text-white text-4xl font-bold mb-8 flex items-center gap-3">
          <span className="w-2 h-8 bg-blue-500 rounded-full"></span>
          Add New Task
        </h2>

        <form className="flex flex-col gap-6 relative z-10">
          <input
            type="text"
            placeholder="What do you need to do?"
            className="w-full bg-black/50 border border-white/10 rounded-2xl px-6 py-5 text-white text-xl outline-none transition-all duration-300 focus:border-blue-500/60 focus:ring-4 focus:ring-blue-500/10 placeholder-gray-500"
          />

          <input
            type="text"
            placeholder="Add a detailed description..."
            className="w-full bg-black/50 border border-white/10 rounded-2xl px-6 py-5 text-white text-xl outline-none transition-all duration-300 focus:border-blue-500/60 focus:ring-4 focus:ring-blue-500/10 placeholder-gray-500"
          />

          <button
            type="submit"
            className="w-fit bg-white text-black hover:bg-blue-500 hover:text-white rounded-xl px-10 py-4 text-xl font-bold mt-4 transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:-translate-y-1 active:scale-95"
          >
            Create Task
          </button>
        </form>
      </div>
    </div>
  );
}
