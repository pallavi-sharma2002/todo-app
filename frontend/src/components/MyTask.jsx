export default function MyTasks() {
  return (
    <div className="bg-black flex justify-center items-center p-6 py-16">
      <div className="w-full max-w-6xl bg-[#0f0f11] border border-white/10 rounded-3xl p-10 shadow-2xl relative overflow-hidden">
        
        {/* Subtle background glow */}
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <h1 className="text-white text-4xl font-bold mb-10 flex items-center gap-3 relative z-10">
          <span className="w-2 h-8 bg-purple-500 rounded-full"></span>
          My Tasks
        </h1>

        <div className="flex flex-wrap gap-8 relative z-10">
          {/* Card 1 */}
          <div className="group w-72 h-80 bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6 transition-all duration-500 hover:border-purple-500/50 hover:bg-black/60 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(168,85,247,0.15)] flex flex-col cursor-pointer">
            <div className="w-12 h-12 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center mb-6 transition-transform group-hover:scale-110">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path></svg>
            </div>
            <h3 className="text-white text-2xl font-bold mb-3 group-hover:text-purple-400 transition-colors">Design System</h3>
            <p className="text-gray-400 text-sm flex-grow leading-relaxed">Create the initial UI components and establish the design language.</p>
            <div className="mt-4 pt-5 border-t border-white/10 flex justify-between items-center">
              <span className="text-xs font-bold px-3 py-1.5 bg-yellow-500/20 text-yellow-500 rounded-full border border-yellow-500/20">In Progress</span>
              <span className="text-gray-500 text-xs font-medium">Today</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group w-72 h-80 bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6 transition-all duration-500 hover:border-blue-500/50 hover:bg-black/60 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(59,130,246,0.15)] flex flex-col cursor-pointer">
            <div className="w-12 h-12 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center mb-6 transition-transform group-hover:scale-110">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
            </div>
            <h3 className="text-white text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">API Integration</h3>
            <p className="text-gray-400 text-sm flex-grow leading-relaxed">Connect the frontend to the backend REST API endpoints.</p>
            <div className="mt-4 pt-5 border-t border-white/10 flex justify-between items-center">
              <span className="text-xs font-bold px-3 py-1.5 bg-green-500/20 text-green-500 rounded-full border border-green-500/20">Completed</span>
              <span className="text-gray-500 text-xs font-medium">Yesterday</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
