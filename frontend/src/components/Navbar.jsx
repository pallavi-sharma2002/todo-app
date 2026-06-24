import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="bg-[#0f0f11]/80 backdrop-blur-lg border-b border-white/10 text-white flex justify-between items-center px-10 py-4 sticky top-0 z-50 shadow-xl">
            {/* Logo area */}
            <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
                <h1 className="text-2xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">TaskFlow</h1>
            </div>

            {/* Navigation Links */}
            <div className="flex gap-8 text-lg font-medium items-center">
                <Link to="/" className="hover:text-blue-400 transition-colors duration-300">Home</Link>
                <Link to="/manage-task" className="hover:text-blue-400 transition-colors duration-300">Manage Task</Link>
                
                {/* Profile Icon */}
                <Link to="/profile" className="ml-4 w-11 h-11 rounded-full bg-gray-800 border-2 border-white/10 hover:border-blue-500 transition-all duration-300 flex items-center justify-center overflow-hidden shadow-lg hover:shadow-blue-500/20">
                    <span className="text-gray-400 text-sm font-bold">Me</span>
                </Link>
            </div>
        </nav>
    );
}