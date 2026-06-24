export default function HomePage() {
  return (
    <div className="min-h-[calc(100vh-80px)] bg-black flex flex-col items-center p-8 py-16">
      
      {/* Header Section */}
      <div className="w-full max-w-6xl mb-12 relative z-10">
        <h1 className="text-white text-5xl font-extrabold flex items-center gap-4 tracking-tight">
          <span className="w-3 h-10 bg-cyan-500 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.5)]"></span>
          Dashboard
        </h1>
        <p className="text-gray-400 mt-4 text-lg ml-7">Welcome back! Here's an overview of your productivity today.</p>
      </div>

      {/* Cards Section */}
      <div className="w-full max-w-6xl relative">
        
        {/* Subtle background glow for the whole dashboard */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-cyan-600/10 rounded-[100%] blur-[100px] pointer-events-none"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          
          {/* Card 1: Total Tasks */}
          <div className="group bg-[#0f0f11]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 transition-all duration-500 hover:border-blue-500/50 hover:bg-black/60 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(59,130,246,0.15)] flex flex-col relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
            
            <div className="flex justify-between items-start mb-6">
              <div className="w-14 h-14 rounded-2xl bg-blue-500/20 text-blue-400 flex items-center justify-center">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path></svg>
              </div>
              <span className="text-blue-400 font-bold bg-blue-500/10 px-3 py-1 rounded-full text-sm">+12%</span>
            </div>
            
            <h2 className="text-gray-400 text-lg font-medium mb-1">Total Tasks</h2>
            <p className="text-white text-5xl font-bold tracking-tight">42</p>
          </div>

          {/* Card 2: Incomplete Tasks */}
          <div className="group bg-[#0f0f11]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 transition-all duration-500 hover:border-yellow-500/50 hover:bg-black/60 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(234,179,8,0.15)] flex flex-col relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
            
            <div className="flex justify-between items-start mb-6">
              <div className="w-14 h-14 rounded-2xl bg-yellow-500/20 text-yellow-400 flex items-center justify-center">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <span className="text-yellow-400 font-bold bg-yellow-500/10 px-3 py-1 rounded-full text-sm">Action Needed</span>
            </div>
            
            <h2 className="text-gray-400 text-lg font-medium mb-1">Incomplete Tasks</h2>
            <p className="text-white text-5xl font-bold tracking-tight">14</p>
          </div>

          {/* Card 3: Complete Tasks */}
          <div className="group bg-[#0f0f11]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 transition-all duration-500 hover:border-green-500/50 hover:bg-black/60 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(34,197,94,0.15)] flex flex-col relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
            
            <div className="flex justify-between items-start mb-6">
              <div className="w-14 h-14 rounded-2xl bg-green-500/20 text-green-400 flex items-center justify-center">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <span className="text-green-400 font-bold bg-green-500/10 px-3 py-1 rounded-full text-sm">Awesome!</span>
            </div>
            
            <h2 className="text-gray-400 text-lg font-medium mb-1">Completed Tasks</h2>
            <p className="text-white text-5xl font-bold tracking-tight">28</p>
          </div>

        </div>
      </div>
    </div>
  );
}