import { NavLink } from "react-router";

const Header = () => {
    return (
        <aside className="w-full lg:w-[280px] xl:w-[300px] flex-shrink-0 lg:sticky lg:top-8 bg-[#121214] border border-zinc-800/80 rounded-3xl p-6 flex flex-col items-center shadow-2xl transition-all duration-300 z-20">
            <div className="flex flex-col items-center text-center w-full">
                <div className="relative group mb-4">
                    <div className="absolute inset-0 bg-gradient-to-tr from-amber-500 to-yellow-400 rounded-2xl blur-md opacity-25 group-hover:opacity-40 transition duration-500"></div>
                    <img 
                        src="../../../images/DU_Gem_Miraj.png" 
                        alt="Tarek Abdullah Miraj" 
                        className="relative w-28 h-28 lg:w-32 lg:h-32 rounded-2xl object-cover border border-zinc-700/50 shadow-md group-hover:scale-[1.02] transition duration-500" 
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=256&h=256&fit=crop";
                        }}
                    />
                </div>

                <h1 className="text-xl font-bold text-zinc-100 tracking-wide mt-2">
                    Tarek Abdullah Miraj
                </h1>
                
                <span className="mt-2.5 px-3.5 py-1 text-xs font-semibold text-amber-400 bg-amber-500/10 rounded-lg border border-amber-500/20 shadow-sm">
                    Full-Stack Developer
                </span>
            </div>
            
            {/* divider */}
            <div className="w-full h-px bg-zinc-800/80 my-5"></div>

            <div className="w-full space-y-4 text-xs">
                {/* mail */}
                <div className="flex items-center gap-3 text-zinc-400 hover:text-zinc-200 transition duration-200">
                    <div className="w-8 h-8 rounded-lg bg-zinc-900/80 border border-zinc-800 flex items-center justify-center text-amber-500 flex-shrink-0">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <div className="min-w-0 flex-1">
                        <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-wider">Email</p>
                        <p className="truncate font-medium">mirajseu2022@gmail.com</p>
                    </div>
                </div>

                {/* location */}
                <div className="flex items-center gap-3 text-zinc-400 hover:text-zinc-200 transition duration-200">
                    <div className="w-8 h-8 rounded-lg bg-zinc-900/80 border border-zinc-800 flex items-center justify-center text-amber-500 flex-shrink-0">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </div>
                    <div className="min-w-0 flex-1">
                        <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-wider">Location</p>
                        <p className="truncate font-medium">Uttara, Dhaka, Bangladesh</p>
                    </div>
                </div>

                {/* university */}
                <div className="flex items-center gap-3 text-zinc-400 hover:text-zinc-200 transition duration-200">
                    <div className="w-8 h-8 rounded-lg bg-zinc-900/80 border border-zinc-800 flex items-center justify-center text-amber-500 flex-shrink-0">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        </svg>
                    </div>
                    <div className="min-w-0 flex-1">
                        <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-wider">Education</p>
                        <p className="truncate font-medium">Southeast University (CSE)</p>
                    </div>
                </div>
            </div>

            {/* divider */}
            <div className="w-full h-px bg-zinc-800/80 my-5"></div>

            {/* sidebar */}
            <nav className="w-full flex flex-col gap-2">
                <NavLink 
                    to="/" 
                    className={({ isActive }) =>
                        `flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-300 border ${
                            isActive 
                                ? "bg-amber-500/10 border-amber-500/20 text-amber-400 shadow-sm" 
                                : "bg-transparent border-transparent text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/30"
                        }`
                    }
                >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span>About Me</span>
                </NavLink>

                <NavLink 
                    to="/resume" 
                    className={({ isActive }) =>
                        `flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-300 border ${
                            isActive 
                                ? "bg-amber-500/10 border-amber-500/20 text-amber-400 shadow-sm" 
                                : "bg-transparent border-transparent text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/30"
                        }`
                    }
                >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span>Resume</span>
                </NavLink>

                <NavLink 
                    to="/projects" 
                    className={({ isActive }) =>
                        `flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-300 border ${
                            isActive 
                                ? "bg-amber-500/10 border-amber-500/20 text-amber-400 shadow-sm" 
                                : "bg-transparent border-transparent text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/30"
                        }`
                    }
                >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                    <span>Projects</span>
                </NavLink>

                <NavLink 
                    to="/blog" 
                    className={({ isActive }) =>
                        `flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-300 border ${
                            isActive 
                                ? "bg-amber-500/10 border-amber-500/20 text-amber-400 shadow-sm" 
                                : "bg-transparent border-transparent text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/30"
                        }`
                    }
                >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H15" />
                    </svg>
                    <span>Blog</span>
                </NavLink>

                <NavLink 
                    to="/contact" 
                    className={({ isActive }) =>
                        `flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-300 border ${
                            isActive 
                                ? "bg-amber-500/10 border-amber-500/20 text-amber-400 shadow-sm" 
                                : "bg-transparent border-transparent text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/30"
                        }`
                    }
                >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    <span>Contact</span>
                </NavLink>
            </nav>

            {/* divider */}
            <div className="w-full h-px bg-zinc-800/80 my-5"></div>

            {/* links */}
            <div className="flex gap-4 items-center justify-center">
                <a href="https://github.com/MirajMalik" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-amber-500 transition duration-200">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                </a>
                <a href="https://www.linkedin.com/in/tarek-abdullah-miraj/" target="_blank" className="text-zinc-400 hover:text-amber-500 transition duration-200">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                </a>
                <a href="#" className="text-zinc-400 hover:text-amber-500 transition duration-200">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                </a>
            </div>
        </aside>
    );
};

export default Header;
