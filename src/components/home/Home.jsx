import { useLoaderData, useNavigate } from "react-router";

const Home = () => {
    const data = useLoaderData();
    const navigate = useNavigate();

    return (
        <div className="w-full space-y-10 animate-fadeIn">
            <div>
                <h2 className="text-3xl font-bold text-zinc-100 tracking-wide">
                    About Me
                </h2>
                <div className="w-12 h-1 bg-amber-500 rounded-full mt-2.5"></div>
            </div>

            <div className="space-y-6">
                <p className="text-zinc-300 text-base leading-relaxed">
                    {data?.about?.description || "Greetings. I am a passionate full-stack web developer with a dedication to creating functional yet visually striking digital experiences. My journey spans modern web technologies and a deep commitment to writing code that endures."}
                </p>
                
                <p className="text-zinc-400 text-sm leading-relaxed">
                    I enjoy building full-stack applications and exploring technologies related to artificial intelligence, machine learning and natural language processing. My focus is on creating clean UI, efficient backend systems and practical real-world applications.
                </p>

                <div className="flex gap-4 flex-wrap pt-2">
                    <button 
                        onClick={() => navigate("/projects")}
                        className="px-5 py-2.5 text-sm font-semibold bg-amber-500 hover:bg-amber-600 text-[#0c0c0e] rounded-xl transition duration-300 shadow-lg shadow-amber-500/10 active:scale-[0.98]"
                    >
                        View Projects
                    </button>

                    <button 
                        onClick={() => navigate("/resume")}
                        className="px-5 py-2.5 text-sm font-semibold bg-[#1a1a1c] border border-zinc-800 hover:border-zinc-700 text-zinc-300 rounded-xl transition duration-300 active:scale-[0.98]"
                    >
                        View Resume
                    </button>
                    
                    <button 
                        onClick={() => navigate("/contact")}
                        className="px-5 py-2.5 text-sm font-semibold bg-zinc-900 border border-zinc-800/80 text-amber-400 hover:text-amber-300 rounded-xl transition duration-300 active:scale-[0.98]"
                    >
                        Get In Touch
                    </button>
                </div>
            </div>

            <div className="space-y-6">
                <h3 className="text-xl font-bold text-zinc-200">
                    Core Technologies
                </h3>
                
                <div className="grid md:grid-cols-2 gap-5">
                    <div className="p-6 bg-[#1a1a1c] border border-zinc-800/60 rounded-2xl flex gap-4 hover:border-zinc-700/50 transition duration-300 group">
                        <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 flex-shrink-0 group-hover:scale-110 transition duration-300">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                            </svg>
                        </div>
                        <div className="space-y-1.5">
                            <h4 className="font-bold text-zinc-100 group-hover:text-amber-400 transition duration-300">Frontend Development</h4>
                            <p className="text-xs text-zinc-400 leading-relaxed">
                                Crafting beautiful, responsive and performance-driven web interfaces using React, Tailwind CSS and HTML5/CSS3.
                            </p>
                        </div>
                    </div>

                    <div className="p-6 bg-[#1a1a1c] border border-zinc-800/60 rounded-2xl flex gap-4 hover:border-zinc-700/50 transition duration-300 group">
                        <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 flex-shrink-0 group-hover:scale-110 transition duration-300">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 012-2h10a2 2 0 012 2m-14 0a2 2 0 002 2h10a2 2 0 002-2M7 8l5-5 5 5M17 16l-5 5-5-5" />
                            </svg>
                        </div>
                        <div className="space-y-1.5">
                            <h4 className="font-bold text-zinc-100 group-hover:text-amber-400 transition duration-300">Backend Systems</h4>
                            <p className="text-xs text-zinc-400 leading-relaxed">
                                Building secure, scalable REST APIs and data storage layers using Node.js, Express.js and MongoDB.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 pt-2">
                <div className="p-6 bg-[#1a1a1c] border border-zinc-800/60 rounded-2xl space-y-4 hover:border-zinc-700/50 transition duration-300">
                    <h3 className="text-lg font-bold text-zinc-200 flex items-center gap-2">
                        <svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        </svg>
                        Education
                    </h3>
                    
                    <div className="space-y-2 border-l border-zinc-800 pl-4 py-1 relative">
                        <div className="absolute w-2 h-2 rounded-full bg-amber-500 -left-[4.5px] top-[14px]"></div>
                        <span className="text-[10px] uppercase font-bold text-amber-500">2022 - 2026</span>
                        <h4 className="text-sm font-bold text-zinc-200">Southeast University</h4>
                        <p className="text-xs text-zinc-400">Bachelor of Science in Computer Science & Engineering</p>
                        <p className="text-xs font-semibold text-zinc-300 mt-1">CGPA: 3.83</p>
                    </div>
                </div>

                <div className="p-6 bg-[#1a1a1c] border border-zinc-800/60 rounded-2xl space-y-4 hover:border-zinc-700/50 transition duration-300">
                    <h3 className="text-lg font-bold text-zinc-200 flex items-center gap-2">
                        <svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        Current Focus
                    </h3>
                    
                    <ul className="grid grid-cols-1 gap-2.5 text-xs text-zinc-400 font-medium">
                        <li className="flex items-center gap-2.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                            Full-Stack Web Architectures
                        </li>
                        <li className="flex items-center gap-2.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                            AI Integration & LLM APIs
                        </li>
                        <li className="flex items-center gap-2.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                            Machine Learning & NLP Research
                        </li>
                        <li className="flex items-center gap-2.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                            Publishing Research Papers
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Home;